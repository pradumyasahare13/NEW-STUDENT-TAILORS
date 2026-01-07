let isHindi= false;

function changeLang(){
    if(!isHindi){
        document.documentElement.lang="hi";

        document.getElementById("title").innerText = "न्यू स्टुडेंट टैलर्स सिवनी";

        document.getElementById("tagline").innerText="सटिक नाप, भरोसेमंद सिलाई";

        document.getElementById("aboutTitle").innerText="हमारे बारे मे";

        document.getElementById("aboutText").innerText="हम पिछ्ले 25 वर्षो से उच्च गुणवत्ता कि सिलाई सेवा प्रदान कर रहे है। ग्राहक संतुष्टि हमारी पहली प्राथमिकता है ।";

        document.getElementById("serviceTitle").innerText="हमारी सेवाये";

        document.getElementById("s1").innerText="पैंट-शर्ट सिलाई";

        document.getElementById("s2").innerText="सूट-कुर्ता सिलाई";

        document.getElementById("s3").innerText="अल्टरशन एवम् फिटिंग";

        document.getElementById("s4").innerText="शादी व फंक्शन कि ड्रेस";

        document.getElementById("orderTitle").innerText="WhatsApp पर आर्डर करे";

        document.getElementById("whatsappBtn").innerText="WhatsApp पर बात करे" ;

        document.getElementById("whatsappBtn").href="";

        document.getElementById("contactTitle").innerText="सम्पर्क करे";

        document.getElementById("address").innerText="पता:";

        document.getElementById("phone").innerText="मोबाईल:";

        document.getElementById("footerText").innerText="© 2026 न्यू स्टुडेंट टैलर्स";

        document.getElementById("langBtn").innerText="English";

        isHindi=true;
    }
    else{
        location.reload();
    }
}


const sections = document.querySelectorAll('section');
 
window.addEventListener("scroll", ()=> {
    const scrollY = window.scrollY + window.innerHeight;
    sections.forEach(section =>{
        if (scrollY> section.offsetTop +100){
            section.classList.add("show");
                }
    });
});