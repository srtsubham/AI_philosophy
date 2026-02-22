window.onload = function() {
    // ==================== MOBILE NAVIGATION ====================
    const getNavi = document.getElementById('navigation');

    // Create mobile menu toggle
    const mobile = document.createElement("span");
    mobile.id = "mobile-navigation";
    getNavi.parentNode.insertBefore(mobile, getNavi);

    mobile.onclick = () => {
        if (getNavi.style.display === 'block') {
            getNavi.style.display = '';
            mobile.style.backgroundImage = 'url(images/mobile/mobile-menu.png)';
        } else {
            getNavi.style.display = 'block';
            mobile.style.backgroundImage = 'url(images/mobile/mobile-close.png)';
        }
    };

    // Add submenu toggles
    const getElm = getNavi.getElementsByTagName("LI");
    for (let i = 0; i < getElm.length; i++) {
        if (getElm[i].children.length > 1) {
            const smenu = document.createElement("span");
            smenu.className = "mobile-submenu";
            smenu.onclick = () => toggleSubmenu(i);
            getElm[i].appendChild(smenu);
        }
    }

    function toggleSubmenu(i) {
        const sub = getElm[i].children[1];
        if (sub.style.display === 'block') {
            sub.style.display = '';
            getElm[i].lastChild.style.backgroundImage = 'url(images/mobile/mobile-expand.png)';
            getElm[i].lastChild.style.backgroundColor = 'rgba(11, 10, 10, 0.91)';
        } else {
            sub.style.display = 'block';
            getElm[i].lastChild.style.backgroundImage = 'url(images/mobile/mobile-collapse.png)';
            getElm[i].lastChild.style.backgroundColor = 'rgba(236, 35, 39, 0.91)';
        }
    }

    // ==================== CHATBOT ====================
    const chatContainer = document.getElementById("chat-container");
    const chatHeader = document.getElementById("chat-header");
    const chatToggle = document.getElementById("chat-toggle");
    const input = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const messages = document.getElementById("chat-messages");

    // Toggle maximize/minimize
    chatHeader.addEventListener("click", () => {
        chatContainer.classList.toggle("minimized");
        chatToggle.textContent = chatContainer.classList.contains("minimized") ? "\u25BC" : "\u25B2";
    });

    // Send message function
    function sendMessage() {
        const msg = input.value.trim();
        if (!msg) return;

        // User message
        const userMsg = document.createElement("div");
        userMsg.textContent = "You: " + msg;
        userMsg.style.margin = "5px 0";
        messages.appendChild(userMsg);

        // Demo AI response
        const botMsg = document.createElement("div");
        botMsg.textContent = "AI: This is a demo response.";
        botMsg.style.margin = "5px 0";
        botMsg.style.color = "blue";
        messages.appendChild(botMsg);

        input.value = "";
        messages.scrollTop = messages.scrollHeight;
    }

    sendBtn.addEventListener("click", sendMessage);
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });
};
