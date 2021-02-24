import CronRunner from '@mohism/core/dist/engine/cron/runner.class';

const runner = new CronRunner([
  {
    expr: '*/10 * * * * *',
    name: '十秒测试',
    func: () => {
      console.log(new Date().toISOString());
    }
  },
  {
    expr: '*/5 * * * * *',
    name: '五秒测试',
    func: () => {
      console.log(new Date().toISOString());
    }
  },
]);

runner.exec();