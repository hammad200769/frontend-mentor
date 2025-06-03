const steps = document.querySelectorAll(".step-page");
const sidebarSteps = document.querySelectorAll(".sidebar .step");
const nextButtons = document.querySelectorAll(".next");
const backButtons = document.querySelectorAll(".back");

let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
    sidebarSteps[i].classList.toggle("active", i === index);
  });
}

nextButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

backButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
})
document.querySelectorAll(".plan").forEach((plan) => {
  plan.addEventListener("click", () => {
    document.querySelectorAll(".plan").forEach(p => p.classList.remove("selected"));
    plan.classList.add("selected");
  });
});


showStep(currentStep);
