import { ClassDeclaration, MethodDeclaration } from "ts-morph";

export function generateMethod(
  classDeclaration: ClassDeclaration,
  name: string,
  returnType: string
): MethodDeclaration {
  return classDeclaration.addMethod({
    name,
    returnType,
    isStatic: true,
    docs: [
      {
        description: `Factory constructor for ${name} interface`,
      },
    ],
  });
}

// tags: [
//   ...properties.map((property) => {
//     return {
//       tagName: "param",
//       text: `${property.getName()} ${property.getType().getText()}`,
//     };
//   }),
//   {
//     tagName: "returns",
//     text: name,
//   },
// ],
