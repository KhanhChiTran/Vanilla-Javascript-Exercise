OuterLoop: for (let i = 0; i < 3; i++) {
  console.log(`Excuted from I loop- the ${i} times `);
  InnerLoop: for (let j = 0; j < 10; j++) {
    console.log(`Excuted from J loop- the ${j} times`);
    if (j == 5) {
      continue OuterLoop;
    }
  }
}
