// export class Component {
//   public constructor(
//     protected readonly element: HTMLElement,
//     protected readonly props: Record<string, any> = {},
//     protected children: Component[] = []
//   ) {
//     console.log("Component is created");
//   }

//   public onMount() {
//     console.log("Component is mounted");
//   }

//   public onUnmount() {
//     console.log("Component is unmounted");
//   }

//   public onUpdated() {
//     console.log("Component is updated");
//   }

//   public render() {
//     console.log("Component is rendered");
//   }

//   public attachTo(
//     parent: HTMLElement,
//     position: InsertPosition = "afterbegin"
//   ) {
//     parent.insertAdjacentElement(position, this.element);
//   }
// }
