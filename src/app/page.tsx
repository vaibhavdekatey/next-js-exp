import Image from "next/image";

enum ThisIsAnEnum {
  FIRST = "First",
  SECOND = "Second",
  THIRD = "Third", //enums can be defined
  FOURTH = "Fourth",
}

interface User {
  readonly dbID: number;
  email: string;
  userId: number;
  GoogleID?: string;
  Method: () => number; // this is a method you can write to return some type within the method maybe number/string/anything you want but it should only return that type
}

const newUser: User = {
  dbID: 2,
  email: "vaibhav@gmail.com",
  userId: 1,
  Method: function Thisfunction() {
    return 4; // eg this is returning a specific type as specified in the interface User
  },
};
newUser.email = "v@vd.com";
// newUser.dbID = 22; idk why is this updating this is although showing its only readonly property

interface workoutFeedback {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

function calculateExercies(arr: number[], target: number): workoutFeedback {
  let wut: number = arr.reduce((acc, currValue) => acc + currValue);
  let average: number = wut / arr.length;
  return {
    periodLength: arr.length,
    trainingDays: arr.filter((h) => h > 0).length,
    success: average >= target,
    rating: average >= target ? 3 : 1,
    ratingDescription: "idk",
    target: target,
    average: average,
  };
}

const workout: number[] = [3, 0, 2, 4.5, 0, 3, 1];

function calcBMI(height: number, weight: number): string {
  let bmi: number = weight / height ** 2;
  if (bmi > 18) {
    return "Normal Range";
  }
  return "nope";
}

export default function Home() {
  console.log(console.log(calcBMI(100, 12)));
  console.log(calculateExercies(workout, 2));
  return (
    <>
      <div>
        <h1>this is an enum probably, also first project for nextjs</h1>
        <h2>{newUser.email}</h2>
        <h2>{newUser.Method()}</h2>
      </div>
    </>
  );
}
