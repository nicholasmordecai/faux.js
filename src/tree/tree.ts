import { Node, NodeType } from "./node";

interface IBranch {
  key: string;
  nodes: Node[];
}

export class Tree {
  public branches: IBranch[] = [];
  public nodes: Node[] = [];
  constructor() {}

  public addBranch(key: string, nodes: Node[]): void {
    this.branches.push({
      key,
      nodes,
    });
  }

  public run() {
    const rootNode = this.nodes.find((node) => node.type === NodeType.root);
    if (!rootNode) {
      throw new Error("No root node found");
    }
    this.runNodes(rootNode);
  }

  public addNode(node: Node) {
    this.nodes.push(node);
  }

  public addNodes(nodes: Node[]) {
    this.nodes.push(...nodes);
  }

  public configure(jsonSchema: JSON) {}

  public runNodes(currentNode: Node): null {
    // console.log('current node key: ',  currentNode.key)
    if (currentNode.type === NodeType.out) {
      //   return console.log("Current Node Out: ", currentNode.key);
      return null;
    }

    const goLeft = Math.random() > 0.5;

    if (goLeft === true) {
      const leftNode = this.nodes.find(
        (node) => node.key === currentNode.branchLeft
      );

      if (leftNode == null) {
        throw new Error("Broken chain - no left node");
      }

      return this.runNodes(leftNode);
    } else {
      const rightNode = this.nodes.find(
        (node) => node.key === currentNode.branchRight
      );

      if (rightNode == null) {
        throw new Error("Broken chain - no right node");
      }

      return this.runNodes(rightNode);
    }
  }
}
