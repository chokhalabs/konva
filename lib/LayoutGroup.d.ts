import { Container } from './Container';
import { Node } from './Node';
import { Shape } from './Shape';
import { Group } from './Group';
export declare class LayoutGroup extends Container<Group | LayoutGroup | Shape> {
    _validateAdd(child: Node): void;
    add(...children: Array<Group | Shape | LayoutGroup>): this;
}
