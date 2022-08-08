type Coordinate = { x: number; y: number };
type Sound = { something: any };
type Motor = { start(): void; isStarted: boolean };

/**
 * Can you say what is wrong in the implementation of the class Vehicle?
 */
class Vehicle {
  protected position: Coordinate;

  public Move(): void {
    // some actions with this.position
  }
}

/**
 * Can you say what should be changed in the Car class to fix problems with SOLID?
 * Maybe there are no problems and it is the SOLID object?
 */
class Car extends Vehicle {
  protected position: Coordinate;
  protected motor: Motor;
  protected gong: Sound;

  private StartMotor(): void {
    if (this.motor.isStarted) {
      return;
    }

    this.motor.start();
  }

  public Move(): void {
    this.StartMotor();
    super.Move();
  }

  public Beep(): void {
    // some actions with this.gong
  }
}

/**
 * If we exam this class in OOP, is something wrong with the class Employee?
 * Is it an object of the OOP paradigm?
 * When this type of classes is acceptable? How should we name them?
 */
class Employee {
  public fullName: string;
  public pin: number;
  public status: string;
}

/**
 * Resharper or other IDE instrument asks you to change method to static?
 * What does it mean? Is it correct to just move logic in static layer?
 * Is "static" a part of the OOP paradigm or not?
 */
class Legends {
  private list: string[];
  public Get(): string[] {
    return this.list;
  }

  public GetBy(by: string): string | null {
    var search = this.list.filter((r) => r == by);
    if (search && search.length === 0) {
      return null;
    }

    return search[0];
  }

  public static FormTitle(someText: string) {
    if (someText.length <= 5) {
      return someText;
    }

    return someText.substr(0, 5);
  }
}

/**
 * Wise men said that...
 * Classes without context or logic are not OOP objects because they doesn't incapsulate anything.
 * Static logic, helpers without fields or global variables are always a bad solution.
 * We should avoid them in ours applications at the all cost. There are only problems with them.
 *
 * So?
 *
 * Why do we use DI and try to make our classes with no context if it is wrong?
 * Is DI approach maybe a bad solution (but a lesser evil) and we have to replace it with something better?
 * Is DI an OOP instrument? Why isn't OOP a case here?
 *
 * Why are we using state management in ours UI apps? State management or Redux approach is literally - global variable with static methods.
 * But we are using them. Why isn't OOP a case here?
 *
 * Maybe wise men are not so wise after all. Or is there another explanation for that?
 */
