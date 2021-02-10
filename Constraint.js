class Cons{
    constructor(bodyA,bodyB,length,stiffness){
        var options1 = {
            bodyA:bodyA,
            bodyB:bodyB,
            length:length,
            stiffness:stiffness
        }
        this.length=length;
        this.stiffness=stiffness;
        this.convar=Con.create(options1);
        World.add(world,this.convar);
    }
    display(){
        push();
        strokeWeight(9);
        line(this.convar.bodyA.position.x,this.convar.bodyA.position.y,this.convar.bodyB.position.x,this.convar.bodyB.position.y)
        pop();
    }
}