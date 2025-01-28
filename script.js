  const audioPlayers = document.querySelectorAll("audio");
  audioPlayers.forEach((player) => {
    player.addEventListener("play", () => {
      audioPlayers.forEach((otherPlayer) => {
        if (otherPlayer !== player) {
          otherPlayer.pause();
        }
      });
    });
  });

