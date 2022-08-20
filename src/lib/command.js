export async function action(interaction) {
  let answer = "สุรชาติไม่เข้าใจคุณ";
  let command = interaction.commandName;
  command === "ตบ" && (answer = "สุรชาติจ้องจะเล่นคุณ");
  command === "ปลอบ" && (answer = "สุรชาติสัมผัสหลังคุณอย่างอ่อนโยน");
  command === "หงี่" && (answer = "สุรชาติบอกให้คุณหันหลัง");
  command === "เป็นห่วง" && (answer = "ระวังตัวไว้นะมึงอะ");
  //   command === "" && (answer = "")
  await interaction.reply(answer);
}
