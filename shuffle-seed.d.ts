declare module 'shuffle-seed' {
    const shuffleSeed: {
      shuffle<T>(arr: T[], seed: string): T[];
      unshuffle<T>(arr: T[], seed: string): T[];
    };
    export default shuffleSeed;
  }
  