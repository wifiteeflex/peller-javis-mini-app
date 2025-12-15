let balance = 0;
let tasksCompleted = 0;
const totalTasks = 50;

// Initialize task buttons
const tasksContainer = document.getElementById("tasks-container");
for (let i = 1; i <= totalTasks; i++) {
  const btn = document.createElement("button");
  btn.innerText = `Watch Rewarded Ad (Task ${i})`;
  btn.classList.add("task-btn");
  btn.onclick = () => completeTask(btn);
  tasksContainer.appendChild(btn);
}

function completeTask(btn) {
  // Monetag Rewarded Ad
  show_10317085()
    .then(() => {
      tasksCompleted++;
      balance += 100; // NGN 100 per task
      document.querySelector(".balance-card h3").innerText = `Balance: NG${balance}`;
      document.getElementById("task-count").innerText = tasksCompleted;
      btn.disabled = true;
      btn.innerText = "Completed";
      updateTopFans();
    })
    .catch(() => {
      alert("Ad not available, try again later.");
    });
}

// Fake Top Fans (You can randomize)
function updateTopFans() {
  const topFans = ["Peller", "Javis", "User1", "User2", "User3"];
  const ol = document.getElementById("top-fans-list");
  ol.innerHTML = "";
  topFans.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user} - ${Math.floor(Math.random() * 5000)} NG`;
    ol.appendChild(li);
  });
}

// Withdraw system (fake)
document.getElementById("withdraw-btn").onclick = () => {
  const account = document.getElementById("account-number").value;
  if (!account) return alert("Enter account number");
  if (tasksCompleted < totalTasks) return alert("Complete all tasks first!");
  alert("You need to invite 20 friends on WhatsApp before withdrawal.");
  document.getElementById("withdraw-status").innerText = "Pending...";
};

// DAILY RESET
function dailyReset() {
  tasksCompleted = 0;
  balance = 0;
  document.querySelector(".balance-card h3").innerText = `Balance: NG${balance}`;
  document.getElementById("task-count").innerText = tasksCompleted;
  document.querySelectorAll(".task-btn").forEach(btn => {
    btn.disabled = false;
    btn.innerText = btn.innerText.replace("Completed", "Watch Rewarded Ad");
  });
}

// Example: reset at midnight
const now = new Date();
const millisTillMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 0,0,0,0) - now;
setTimeout(() => {
  dailyReset();
  setInterval(dailyReset, 24*60*60*1000);
}, millisTillMidnight);
