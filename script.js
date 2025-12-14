let completed = 0;
let total = 5;

function watchAd(type) {
  show_10317085().then(() => {
    completed++;
    updateProgress();

    if (type === 2) {
      alert("⭐ PREMIUM TASK DONE!");
    } else {
      alert("✅ TASK COMPLETED!");
    }
  }).catch(() => {
    alert("Ad not available. Try again.");
  });
}

function updateProgress() {
  document.getElementById("count").innerText =
    completed + " / " + total + " TASKS COMPLETED";

  let percent = (completed / total) * 100;
  document.getElementById("bar").style.width = percent + "%";
}
