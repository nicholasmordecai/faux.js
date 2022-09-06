export enum NodeType {
    root,
    decision,
    chance,
    out,
  }
  
  export class Node {
    public key: string;
    public type: NodeType;
    public branchLeft: string = '';
    public branchRight: string = '';
    public factoryKey: string = '';
  
    constructor(
      key: string,
      type: NodeType,
      factoryKey?: string,
      branchLeft?: string,
      branchRight?: string
    ) {
      this.key = key;
      this.type = type;
      if (factoryKey) {
        this.factoryKey = factoryKey;
      }
  
      if (branchLeft && branchRight) {
        this.branchLeft = branchLeft;
        this.branchRight = branchRight;
      }
    }
  
    public addBranches(left: string, right: string) {
      this.branchLeft = left;
      this.branchRight = right;
    }
  }
  