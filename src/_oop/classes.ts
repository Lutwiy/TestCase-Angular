import { publishFacade } from '@angular/compiler';

type Coordinate = { x: number; y: number };
type Sound = { something: any };
type Motor = { start(): void; isStarted: boolean };
enum Status {
  Draft,
  Approved,
  Declined,
}

/**
 * Can you tell what is wrong in the implementation of the class Vehicle?
 */
class Vehicle {
  protected position: Coordinate;

  public Move(): void {
    // some actions with this.position
  }
}

/**
 * Can you tell what should be changed in the Car class to fix problems with SOLID?
 * Maybe there are no problems and it is SOLID object.
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
 * If you exam this class in OOP, is something wrong with the class Employee?
 * Is it an object of OOP paradigm?
 * When this type of classes is acceptable? How should we name them?
 */
class Employee {
  public fullName: string;
  public pin: number;
  public status: Status;
  public gender: string;
}

interface IEmployeeDAL {
  all(): Employee[];
  one(id: string): Employee;
  put(empoloyee: Employee): Employee;
}

class EmployeeService {
  private dal: IEmployeeDAL;
  public formGreeting(employee: Employee): string {
    return `Welcome ${employee.gender} ${employee.fullName}!`;
  }

  public getList(): string[] {
    return this.dal.all().map((e) => `${e.pin} ${e.fullName}`);
  }

  public approve(id: string): void {
    const employee = this.dal.one(id);
    if (employee.status == Status.Draft) {
      employee.status = Status.Approved;
    }

    if (employee.status == Status.Declined) {
      throw new Error('This employee cannot be approved. He is in decline.');
    }

    this.dal.put(employee);
  }

  public put(e: Employee): void {
    this.dal.put(e);
  }
}

/**
 * Resharper or other IDE instrument asks you to change method to static.
 * What does it mean? Is it correct to just move logic in static layer?
 * Is "static" a part of the OOP paradigm or not?
 */

class Book {
  public titles: string[];
  public FormTitles(): string[] {
    return this.titles.map((t) => Legends.FormTitle(t));
  }
}

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
 * Classes without context or logic are not OOP objects because they don't incapsulate anything.
 * Static logic, helpers without fields or global variables are always a bad solution.
 * We should avoid them in our applications at all costs. There are only problems with them.
 *
 * So?
 *
 * Knowing it's wrong, why do we use DI and create our classes without context?
 * Is DI approach maybe a bad solution (but a lesser evil) and we have to replace it with something better?
 * Is DI an OOP instrument? Why isn't OOP a case here?
 *
 * Why are we using state management in our UI apps? State management or Redux approach is literally - global variable with static methods.
 * But we are using them. Why isn't OOP a case here?
 *
 * Maybe wise men are not so wise after all. Or is there another explanation for that?
 */
