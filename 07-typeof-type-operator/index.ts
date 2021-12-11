let helloStr = 'hello';

// helloStrType: string
let helloStrType: typeof helloStr;

function getScores() {
  return {
    low: 50,
    high: 100,
  };
}

// type ScoresType = { low: number; high: number; }
type ScoresType = ReturnType<typeof getScores>;
