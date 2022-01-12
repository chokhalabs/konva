import { Util } from './Util.js';
import { Container } from './Container.js';
import { _registerNode } from './Global.js';
export class LayoutGroup extends Container {
    _validateAdd(child) {
        var type = child.getType();
        if (type !== 'Group' && type !== 'Shape' && type !== 'LayoutGroup') {
            Util.throw('You may only add layoutgroups, groups and shapes to groups.');
        }
    }
    add(...children) {
        const allChildren = this.getChildren().concat(children);
        let step = this.height();
        if (allChildren.length > 0) {
            step = (this.height() - this.y()) / allChildren.length;
        }
        for (let i = 0; i < allChildren.length; i++) {
            const c = allChildren[i];
            c.x(0);
            c.y(i * step + 4);
            c.height(step);
            c.width(this.width());
        }
        return super.add(...children);
    }
}
LayoutGroup.prototype.nodeType = 'LayoutGroup';
_registerNode(LayoutGroup);
