@DecoratorUser("name nametest", "email emailtest")
export class User {}

export function DecoratorUser(name: string, email: string) {
  return function(classFn: Function) {
    classFn.prototype.name = name;
    classFn.prototype.email = email;
  };
}
