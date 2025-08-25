from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
import json
import re

chatbot_bp = Blueprint('chatbot', __name__)

class InsuranceChatbot:
    def __init__(self):
        self.knowledge_base = {
            "basic_concepts": {
                "bảo hiểm nhân thọ": "Bảo hiểm nhân thọ là hợp đồng giữa bạn và công ty bảo hiểm, trong đó công ty cam kết chi trả một khoản tiền cho người thụ hưởng khi bạn qua đời hoặc khi hợp đồng đáo hạn.",
                "phí bảo hiểm": "Phí bảo hiểm là số tiền bạn phải đóng định kỳ (hàng tháng, quý, năm) để duy trì hợp đồng bảo hiểm.",
                "số tiền bảo hiểm": "Số tiền bảo hiểm là khoản tiền mà công ty bảo hiểm sẽ chi trả cho người thụ hưởng khi xảy ra sự kiện bảo hiểm.",
                "người thụ hưởng": "Người thụ hưởng là người được chỉ định để nhận số tiền bảo hiểm khi bạn qua đời.",
                "giá trị hoàn lại": "Giá trị hoàn lại là số tiền bạn có thể nhận được nếu chấm dứt hợp đồng bảo hiểm trước thời hạn."
            },
            "insurance_types": {
                "bảo hiểm nhân thọ truyền thống": {
                    "description": "Loại bảo hiểm cơ bản nhất, tập trung vào bảo vệ tài chính cho gia đình khi người được bảo hiểm qua đời.",
                    "pros": ["Phí bảo hiểm thấp", "Đơn giản, dễ hiểu", "Bảo vệ tài chính hiệu quả"],
                    "cons": ["Không có giá trị đầu tư", "Không hoàn lại phí nếu không có sự cố"],
                    "suitable_for": "Người trẻ, thu nhập hạn chế, cần bảo vệ tài chính cơ bản"
                },
                "bảo hiểm nhân thọ đầu tư": {
                    "description": "Kết hợp bảo hiểm và đầu tư, một phần phí bảo hiểm được đầu tư vào các quỹ.",
                    "pros": ["Có khả năng sinh lời", "Linh hoạt trong đầu tư", "Có thể rút tiền khi cần"],
                    "cons": ["Phí cao hơn", "Rủi ro đầu tư", "Phức tạp hơn"],
                    "suitable_for": "Người có thu nhập ổn định, hiểu biết về đầu tư"
                },
                "bảo hiểm nhân thọ hỗn hợp": {
                    "description": "Kết hợp bảo vệ và tích lũy, có giá trị hoàn lại khi đáo hạn.",
                    "pros": ["Vừa bảo vệ vừa tích lũy", "Có giá trị hoàn lại", "Ổn định"],
                    "cons": ["Phí cao hơn bảo hiểm truyền thống", "Lợi nhuận thấp"],
                    "suitable_for": "Người muốn vừa bảo vệ vừa tiết kiệm"
                }
            },
            "calculation_guide": {
                "income_multiple": "Mức bảo hiểm khuyến nghị = 5-10 lần thu nhập hàng năm",
                "debt_coverage": "Cần tính thêm các khoản nợ hiện tại (vay nhà, vay xe, thẻ tín dụng)",
                "family_expenses": "Chi phí sinh hoạt gia đình trong 5-10 năm tới",
                "education_fund": "Quỹ giáo dục cho con (nếu có)",
                "emergency_fund": "Quỹ khẩn cấp 6-12 tháng chi phí sinh hoạt"
            }
        }
        
        self.conversation_starters = [
            "Xin chào! Tôi là trợ lý tư vấn bảo hiểm nhân thọ miễn phí. Tôi có thể giúp bạn:",
            "• Hiểu các khái niệm cơ bản về bảo hiểm nhân thọ",
            "• Tính toán nhu cầu bảo hiểm phù hợp",
            "• So sánh các loại bảo hiểm khác nhau",
            "• Giải đáp thắc mắc về quy trình và điều khoản",
            "",
            "Bạn muốn tìm hiểu về điều gì? Hoặc bạn có thể hỏi tôi bất kỳ câu hỏi nào về bảo hiểm nhân thọ!"
        ]

    def get_response(self, user_message, conversation_history=None):
        user_message = user_message.lower().strip()
        
        # Greeting responses
        if any(greeting in user_message for greeting in ["xin chào", "hello", "hi", "chào"]):
            return "\n".join(self.conversation_starters)
        
        # Basic concept explanations
        for concept, explanation in self.knowledge_base["basic_concepts"].items():
            if concept in user_message:
                return f"**{concept.title()}:**\n\n{explanation}\n\nBạn có muốn tìm hiểu thêm về khái niệm nào khác không?"
        
        # Insurance type comparisons
        if any(keyword in user_message for keyword in ["so sánh", "loại bảo hiểm", "khác nhau", "nên chọn"]):
            return self._compare_insurance_types()
        
        # Need calculation
        if any(keyword in user_message for keyword in ["tính toán", "nhu cầu", "bao nhiêu", "mức bảo hiểm"]):
            return self._guide_calculation()
        
        # Age and income based advice
        age_match = re.search(r'(\d+)\s*tuổi', user_message)
        income_match = re.search(r'(\d+)\s*(triệu|tr)', user_message)
        
        if age_match or income_match:
            return self._personalized_advice(age_match, income_match, user_message)
        
        # General advice
        if any(keyword in user_message for keyword in ["tư vấn", "nên mua", "bắt đầu", "không biết"]):
            return self._general_advice()
        
        # Default response
        return self._default_response()
    
    def _compare_insurance_types(self):
        response = "**So sánh các loại bảo hiểm nhân thọ:**\n\n"
        
        for insurance_type, details in self.knowledge_base["insurance_types"].items():
            response += f"**{insurance_type.title()}:**\n"
            response += f"{details['description']}\n"
            response += f"✅ Ưu điểm: {', '.join(details['pros'])}\n"
            response += f"❌ Nhược điểm: {', '.join(details['cons'])}\n"
            response += f"👥 Phù hợp: {details['suitable_for']}\n\n"
        
        response += "Bạn có muốn tôi tư vấn cụ thể dựa trên tình hình của bạn không?"
        return response
    
    def _guide_calculation(self):
        return """**Hướng dẫn tính toán nhu cầu bảo hiểm:**

**Công thức cơ bản:**
• Mức bảo hiểm = 5-10 lần thu nhập hàng năm

**Các yếu tố cần tính thêm:**
• Các khoản nợ hiện tại (vay nhà, xe, thẻ tín dụng)
• Chi phí sinh hoạt gia đình trong 5-10 năm
• Quỹ giáo dục cho con (nếu có)
• Quỹ khẩn cấp (6-12 tháng chi phí)

**Ví dụ:**
Thu nhập: 20 triệu/tháng = 240 triệu/năm
Mức bảo hiểm khuyến nghị: 1.2 - 2.4 tỷ đồng

Bạn có thể chia sẻ thu nhập và tình hình gia đình để tôi tư vấn cụ thể hơn không?"""
    
    def _personalized_advice(self, age_match, income_match, user_message):
        age = int(age_match.group(1)) if age_match else None
        income = int(income_match.group(1)) if income_match else None
        
        response = "**Tư vấn cá nhân hóa:**\n\n"
        
        if age:
            response += f"**Với độ tuổi {age}:**\n"
            if age < 30:
                response += "• Ưu tiên bảo hiểm nhân thọ truyền thống (phí thấp)\n"
                response += "• Tập trung xây dựng nền tảng tài chính\n"
            elif age < 45:
                response += "• Có thể cân nhắc bảo hiểm hỗn hợp\n"
                response += "• Cân bằng giữa bảo vệ và tích lũy\n"
            else:
                response += "• Nên ưu tiên bảo hiểm có giá trị hoàn lại\n"
                response += "• Chuẩn bị cho giai đoạn nghỉ hưu\n"
        
        if income:
            annual_income = income * 12
            min_coverage = annual_income * 5
            max_coverage = annual_income * 10
            response += f"\n**Với thu nhập {income} triệu/tháng:**\n"
            response += f"• Thu nhập năm: {annual_income} triệu\n"
            response += f"• Mức bảo hiểm khuyến nghị: {min_coverage/1000:.1f} - {max_coverage/1000:.1f} tỷ đồng\n"
        
        response += "\nBạn có gia đình (vợ/chồng, con) chưa? Điều này sẽ ảnh hưởng đến mức bảo hiểm cần thiết."
        
        return response
    
    def _general_advice(self):
        return """**Lời khuyên chung về bảo hiểm nhân thọ:**

**Khi nào nên mua:**
• Càng sớm càng tốt (phí thấp hơn)
• Khi có người phụ thuộc tài chính
• Khi có thu nhập ổn định

**Nguyên tắc vàng:**
• Mua sớm, mua đủ, mua đúng
• Ưu tiên bảo vệ trước, đầu tư sau
• Đọc kỹ điều khoản trước khi ký

**Lưu ý quan trọng:**
• Khai báo sức khỏe trung thực
• Lựa chọn công ty uy tín
• Xem xét khả năng tài chính dài hạn

Bạn đang ở giai đoạn nào trong cuộc đời? Tôi có thể tư vấn cụ thể hơn."""
    
    def _default_response(self):
        return """Tôi chưa hiểu rõ câu hỏi của bạn. Bạn có thể hỏi tôi về:

• **Khái niệm cơ bản:** "Bảo hiểm nhân thọ là gì?"
• **Tính toán nhu cầu:** "Tôi cần mua bảo hiểm bao nhiêu?"
• **So sánh sản phẩm:** "Loại bảo hiểm nào phù hợp với tôi?"
• **Tư vấn cá nhân:** "Tôi 30 tuổi, thu nhập 20 triệu, nên mua gì?"

Hoặc bạn có thể đặt câu hỏi cụ thể khác về bảo hiểm nhân thọ!"""

# Initialize chatbot
chatbot = InsuranceChatbot()

@chatbot_bp.route('/chat', methods=['POST'])
@cross_origin()
def chat():
    try:
        data = request.get_json()
        user_message = data.get('message', '')
        conversation_history = data.get('history', [])
        
        if not user_message:
            return jsonify({'error': 'Tin nhắn không được để trống'}), 400
        
        response = chatbot.get_response(user_message, conversation_history)
        
        return jsonify({
            'response': response,
            'timestamp': str(int(__import__('time').time()))
        })
    
    except Exception as e:
        return jsonify({'error': f'Lỗi xử lý: {str(e)}'}), 500

@chatbot_bp.route('/health', methods=['GET'])
@cross_origin()
def health():
    return jsonify({'status': 'healthy', 'service': 'Insurance Chatbot'})

