const modal = document.getElementById("modal");
    const openBtn = document.getElementById("openTermsBtn");
    const closeBtn = document.querySelector(".modal .close");
    const agreeBtn = document.getElementById("agreeAndContinueBtn");
    const checkbox = document.getElementById("gdprCheckbox");
    const termsStep = document.getElementById("termsStep");
    const contactStep = document.getElementById("contactStep");
  
    // Open modal on button click
    openBtn.onclick = () => {
      modal.style.display = "block";
      termsStep.style.display = "block";
      contactStep.style.display = "none";
      checkbox.checked = false;
    };
  
    // Close modal
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };
  
    // Click outside to close
    window.onclick = (e) => {
      if (e.target === modal) modal.style.display = "none";
    };
  
    // Handle agreement
    agreeBtn.onclick = () => {
      if (!checkbox.checked) {
        alert("Please agree to the terms before continuing.");
      } else {
        termsStep.style.display = "none";
        contactStep.style.display = "block";
      }
    };