interface AbstractFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class WinFactory implements AbstractFactory {
  public createButton(): Button {
    return new WinButton();
  }

  public createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}

class MacFactory implements AbstractFactory {
  public createButton(): Button {
    return new MacButton();
  }

  public createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

interface Button {
  usefulFunction(): string;
}

class WinButton implements Button {
  public usefulFunction(): string {
    return "Win Button";
  }
}

class WinCheckbox implements Checkbox {
  public usefulFunction(): string {
    return "Win Checkbox";
  }
}

interface Checkbox {
  usefulFunction(): string;
}

class MacButton implements Checkbox {
  public usefulFunction(): string {
    return "Mac Button";
  }
}

class MacCheckbox implements Checkbox {
  public usefulFunction(): string {
    return "Mac Checkbox";
  }
}

function clientCode(factory: AbstractFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  console.log(button.usefulFunction());
  console.log(checkbox.usefulFunction());
}

console.log("Client: Testing client code with the first factory type...");
clientCode(new WinFactory());

console.log("");

console.log(
  "Client: Testing the same client code with the second factory type..."
);
clientCode(new MacFactory());
