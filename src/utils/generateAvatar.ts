const avatarGradients = [
  "linear-gradient(to bottom, #AF8FF6, #7466E2)",
  "linear-gradient(to bottom, #5AACF7, #428DD2)",
  "linear-gradient(to bottom, #FC86A8, #DC5978)",
  "linear-gradient(to bottom, #8DCD5F, #4CBC46)",
  "linear-gradient(to bottom, #FC805C, #D55447)" 
];

function getRandomGradient() {
  return avatarGradients[Math.floor(Math.random() * avatarGradients.length)];
}

export function generateAvatar(firstName = '', lastName = '') {
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase() || '';
  const gradient = getRandomGradient();

  return { initials, gradient };
}