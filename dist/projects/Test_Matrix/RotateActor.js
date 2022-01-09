import { ActorBase } from "../../engine/actors.js";
import { CollisionComponent } from "../../engine/components/CollisionComponent.js";
import { BoxShapeComponent } from "../../engine/components/ShapeComponent.js";
import * as PhysicsModule from "../../engine/physics.js";
export class RotateActor extends ActorBase {
    constructor() {
        super();
        let shapeComponent = new BoxShapeComponent(this);
        shapeComponent.setSize(50, 50);
        this.addComponent(shapeComponent);
        let collisionComponent = new CollisionComponent(this);
        collisionComponent.setCollisionType(PhysicsModule.Channel_Static);
        collisionComponent.setCollisionResponses(PhysicsModule.Channel_Movable);
        collisionComponent.setSize(50, 50);
        this.addComponent(collisionComponent);
    }
    tick(inFramework) {
        // console.log(this);
    }
}
//# sourceMappingURL=RotateActor.js.map