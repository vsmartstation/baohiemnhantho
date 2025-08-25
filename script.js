class ChatWidget {
    constructor() {
        this.isOpen = false;
        this.conversationHistory = [];
        this.apiBaseUrl = window.location.origin + '/api';
        
        this.initializeElements();
        this.bindEvents();
        this.addDemoContent();
    }

    initializeElements() {
        this.chatButton = document.getElementById('chat-widget-button');
        this.chatWidget = document.getElementById('chat-widget');
        this.chatClose = document.getElementById('chat-close');
        this.chatMessages = document.getElementById('chat-messages');
        this.chatInput = document.getElementById('chat-input');
        this.chatSend = document.getElementById('chat-send');
        this.loadingOverlay = document.getElementById('loading-overlay');
        this.quickQuestions = document.querySelectorAll('.quick-question');
    }

    bindEvents() {
        this.chatButton.addEventListener('click', () => this.toggleChat());
        this.chatClose.addEventListener('click', () => this.closeChat());
        this.chatSend.addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        // Quick questions
        this.quickQuestions.forEach(button => {
            button.addEventListener('click', () => {
                const question = button.getAttribute('data-question');
                this.chatInput.value = question;
                this.sendMessage();
            });
        });

        // Close chat when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen && 
                !this.chatWidget.contains(e.target) && 
                !this.chatButton.contains(e.target)) {
                this.closeChat();
            }
        });
    }

    addDemoContent() {
        // Add demo content to body if not exists
        if (!document.querySelector('.demo-content')) {
            const demoContent = document.createElement('div');
            demoContent.className = 'demo-content';
            demoContent.innerHTML = `
                <h1>Chatbot Tư Vấn Bảo Hiểm Nhân Thọ</h1>
                <p>Trợ lý AI miễn phí giúp bạn hiểu rõ về bảo hiểm nhân thọ và đưa ra tư vấn khách quan</p>
                
                <div class="demo-features">
                    <div class="feature-card">
                        <h3>🎯 Tư Vấn Cá Nhân Hóa</h3>
                        <p>Phân tích nhu cầu dựa trên tình hình tài chính và gia đình của bạn</p>
                    </div>
                    <div class="feature-card">
                        <h3>📚 Kiến Thức Minh Bạch</h3>
                        <p>Giải thích các khái niệm bảo hiểm một cách dễ hiểu và khách quan</p>
                    </div>
                    <div class="feature-card">
                        <h3>🔒 Hoàn Toàn Miễn Phí</h3>
                        <p>Không bán hàng, chỉ tư vấn và giáo dục về bảo hiểm nhân thọ</p>
                    </div>
                </div>
            `;
            document.body.insertBefore(demoContent, document.body.firstChild);
        }
    }

    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        this.isOpen = true;
        this.chatWidget.classList.add('open');
        this.chatButton.style.display = 'none';
        this.chatInput.focus();
    }

    closeChat() {
        this.isOpen = false;
        this.chatWidget.classList.remove('open');
        this.chatButton.style.display = 'flex';
    }

    async sendMessage() {
        const message = this.chatInput.value.trim();
        if (!message) return;

        // Disable input
        this.chatInput.disabled = true;
        this.chatSend.disabled = true;

        // Add user message
        this.addMessage(message, 'user');
        this.chatInput.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        try {
            // Send to API
            const response = await this.callChatAPI(message);
            
            // Remove typing indicator
            this.hideTypingIndicator();
            
            // Add bot response
            this.addMessage(response.response, 'bot');
            
            // Update conversation history
            this.conversationHistory.push(
                { role: 'user', content: message },
                { role: 'bot', content: response.response }
            );

        } catch (error) {
            console.error('Chat API Error:', error);
            this.hideTypingIndicator();
            this.addMessage('Xin lỗi, có lỗi xảy ra. Vui lòng thử lại sau.', 'bot');
        } finally {
            // Re-enable input
            this.chatInput.disabled = false;
            this.chatSend.disabled = false;
            this.chatInput.focus();
        }
    }

    async callChatAPI(message) {
        // For demo purposes, return mock response if API is not available
        try {
            const response = await fetch(`${this.apiBaseUrl}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: message,
                    history: this.conversationHistory
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.warn('API not available, using mock response:', error);
            return this.getMockResponse(message);
        }
    }

    getMockResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('xin chào') || lowerMessage.includes('hello')) {
            return {
                response: `Xin chào! Tôi là trợ lý tư vấn bảo hiểm nhân thọ miễn phí. Tôi có thể giúp bạn:

• Hiểu các khái niệm cơ bản về bảo hiểm nhân thọ
• Tính toán nhu cầu bảo hiểm phù hợp
• So sánh các loại bảo hiểm khác nhau
• Giải đáp thắc mắc về quy trình và điều khoản

Bạn muốn tìm hiểu về điều gì? Hoặc bạn có thể hỏi tôi bất kỳ câu hỏi nào về bảo hiểm nhân thọ!`
            };
        }
        
        if (lowerMessage.includes('bảo hiểm nhân thọ là gì')) {
            return {
                response: `**Bảo hiểm nhân thọ:**

Bảo hiểm nhân thọ là hợp đồng giữa bạn và công ty bảo hiểm, trong đó công ty cam kết chi trả một khoản tiền cho người thụ hưởng khi bạn qua đời hoặc khi hợp đồng đáo hạn.

**Mục đích chính:**
• Bảo vệ tài chính cho gia đình khi bạn không còn
• Đảm bảo cuộc sống của người thân không bị ảnh hưởng
• Có thể kết hợp với tích lũy và đầu tư

Bạn có muốn tìm hiểu thêm về các loại bảo hiểm nhân thọ không?`
            };
        }
        
        if (lowerMessage.includes('nhu cầu') || lowerMessage.includes('bao nhiêu')) {
            return {
                response: `**Hướng dẫn tính toán nhu cầu bảo hiểm:**

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

Bạn có thể chia sẻ thu nhập và tình hình gia đình để tôi tư vấn cụ thể hơn không?`
            };
        }
        
        if (lowerMessage.includes('so sánh') || lowerMessage.includes('loại')) {
            return {
                response: `**So sánh các loại bảo hiểm nhân thọ:**

**Bảo hiểm nhân thọ truyền thống:**
Loại bảo hiểm cơ bản nhất, tập trung vào bảo vệ tài chính cho gia đình khi người được bảo hiểm qua đời.
✅ Ưu điểm: Phí bảo hiểm thấp, Đơn giản dễ hiểu, Bảo vệ tài chính hiệu quả
❌ Nhược điểm: Không có giá trị đầu tư, Không hoàn lại phí nếu không có sự cố
👥 Phù hợp: Người trẻ, thu nhập hạn chế, cần bảo vệ tài chính cơ bản

**Bảo hiểm nhân thọ đầu tư:**
Kết hợp bảo hiểm và đầu tư, một phần phí bảo hiểm được đầu tư vào các quỹ.
✅ Ưu điểm: Có khả năng sinh lời, Linh hoạt trong đầu tư, Có thể rút tiền khi cần
❌ Nhược điểm: Phí cao hơn, Rủi ro đầu tư, Phức tạp hơn
👥 Phù hợp: Người có thu nhập ổn định, hiểu biết về đầu tư

Bạn có muốn tôi tư vấn cụ thể dựa trên tình hình của bạn không?`
            };
        }
        
        return {
            response: `Tôi chưa hiểu rõ câu hỏi của bạn. Bạn có thể hỏi tôi về:

• **Khái niệm cơ bản:** "Bảo hiểm nhân thọ là gì?"
• **Tính toán nhu cầu:** "Tôi cần mua bảo hiểm bao nhiêu?"
• **So sánh sản phẩm:** "Loại bảo hiểm nào phù hợp với tôi?"
• **Tư vấn cá nhân:** "Tôi 30 tuổi, thu nhập 20 triệu, nên mua gì?"

Hoặc bạn có thể đặt câu hỏi cụ thể khác về bảo hiểm nhân thọ!`
        };
    }

    addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'message-avatar';
        
        if (sender === 'bot') {
            avatarDiv.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
        } else {
            avatarDiv.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
        }
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        // Format content with basic markdown support
        const formattedContent = this.formatMessage(content);
        contentDiv.innerHTML = formattedContent;
        
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        
        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    formatMessage(content) {
        // Basic markdown formatting
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/\n/g, '<br>')
            .replace(/^(.*)$/g, '<p>$1</p>')
            .replace(/• (.*?)(<br>|$)/g, '<li>$1</li>')
            .replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>')
            .replace(/<\/ul><ul>/g, '');
    }

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-message';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="message-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        
        this.chatMessages.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingMessage = this.chatMessages.querySelector('.typing-message');
        if (typingMessage) {
            typingMessage.remove();
        }
    }

    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
}

// Initialize chat widget when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ChatWidget();
});

