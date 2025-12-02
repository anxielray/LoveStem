// 101 Mechanics
import Header from "../components/Header";
import LessonSection from "../components/LessonSection";
import PhyCourseSidebar from "../components/Sidebar";
import ScalarVectorVisualizer from "../components/ScalarVectorVis";

export default function Physics01() {
    const torqueSymbol = "\u03C4";

  return (
    <>
      <Header />

      <main
        className="max-w-6xl mx-auto space-y-16"
        style={{
          padding: "44px 40px 0 320px",
        }}
      >
        <PhyCourseSidebar />

        {/* Course Introduction */}
        <section id="introduction" className="space-y-4">
          <h1 className="text-4xl font-bold">Mechanics</h1>
        </section>

        {/* Lesson Sections */}
        <LessonSection
          title="What is it?"
          content="Mechanics is concerned with the action of forces on a body. 
          The branch of mechanics that deals with forces when they come into equillibrium is called <b><i>statics</i></b>.
          The branch of mechanics that deals with the effects of forces which are not in equillibrium is called <b><i>dynamics</i></b>."
        />
        <LessonSection
          title="Scalar and Vector Quantities"
          content="A <em className='text-black'><i>scalar quantity</i></em> is a quantity that has only magnitude (size or numerical value) whereas a
          <em className='text-black'><i>vector quantity</i></em> is a quantity that has both magnitude and direction. Examples of scalar quantities include mass, temperature,
          and time, while examples of vector quantities include displacement, velocity, and force.
          When working with forces, it is important that the distinction between scalar and vectors are made since their mathematical computations are different.
          Scalars are computed arithmetically: added, subtracted from the numbers. Vectors, however, are computed geometrically. A method commmon on this is the 
          <i>the parallelogram law</i>"
        />
        <ScalarVectorVisualizer />
        <LessonSection
          title="The Parallelogram Law"
          content="<i>If the forces acting at a point are represented in magnitude and direction by the sides of a parallelogram
          drawn from the point, their resultant is represented by the diagonal of the parallelogram drawn from that point</i><br/><br/>
          The parallelogram law ensures that vectors(forces, in particular) are computed correctly, geometrically, taking each vector into account.
          This is done by completing a parallelogram on a vector. This maintains their magnitude as well as their directions.
          The parallelogram law is used to sum vector forces. Now what about subtracting the forces, if the resultant is the one available instead?"
        />
        <LessonSection
        title={"Resolution of Forces"}
        content="This is the reverse process of the parallelogram law. Here, a single force is broken down into two component forces
        acting at right angles to each other. This is useful when dealing with inclined planes where forces are not acting
        along the horizontal and vertical axes. It is the splitting of a resultant forces into two components.<br/><br/>
        For example, a vector force, <i><b>F</b>, 30° from the x-axis, 2m</i> in magnitude. To resolve the force into two, the trigonometric rule of <b>SOHCAHTOA</b> is applicable.
        The angle 30° is always considered based on the x-axis. The resultant force, wil be the hypotenus and from that, finding the vertical force, is <i><b>F</b>sin30°</i>,
        while the horizontal force is <i><b>F</b>cos30°</i>."
        />
        <div  id="forces"></div>
        <LessonSection
        title={"Moments and Couples"}
        content={`A force applied to a hinged or pivoted body changes its rotation about the pivot or hinge.
        The rotational effect of the force about the pivot is called moment, or torque( \u03C4 ).
        The moment grows with the magnitude of the <b><i>normal</i></b> force and the distance from the pivot point to the point of application of the force.
        Mathematically, moment is expressed as the product of the force and the perpendicular distance from the pivot to the line of action of the force.
        And it is measured in Newton meters (Nm) and are given a positive sign if they tend to produce a clockwise rotation.
        <br/><br/>
        ${torqueSymbol} <i>=</i> <b>F</b> r⊥  .<b>I</b><br/>
        ${torqueSymbol} <i>=</i> r <b>F</b>⊥  .<b>II</b><br/><br/>
        
        where <b>F</b> = <i><b>F</b>sinθ</i> only used in equation .<b>II</b> For equation .<b>I</b>  radius is used relatively perpendicular.

        <br/><br/>
        There are two ways to work out the torque of a body; in method .<b>I</b>, multiply the force to the perpendicular distance to the pivot(r).
        In method .<b>II</b>, multiply the radius with the normal force component of the applied force to the arm(radius). The parallel component does not contribute to the moment since its moment arm is zero.
        Only the perpendicular component contributes to the moment.
        <br/><br/>
        A couple consists of two equal and opposite forces whose lines of action do not coincide. The moment of a couple is the product of one of the forces and the perpendicular distance between their lines of action.
        Couples produce rotation without translation, meaning they cause an object to rotate without moving its center of mass.
        `}
        />
        <LessonSection
        title={"Friction"}
        content="Frictional forces act along the surface between two bodies that move in a direction(s) that opposes reative motion of the surface.
        Sometimes friction can be a disadvantage, like when trying to push a load accross a rough surface, while in other cases, it can be an advantage, like when walking or writing.
        The study of friction, wear, lubrication is called <b><i>tribology</i></b>.<br/><br/>
        There are two main types of friction: static friction and kinetic friction. Static friction acts on objects that are not moving, preventing them from starting to move.
        Kinetic friction acts on objects that are already in motion, opposing their movement.
        The maximum static frictional force that can be exerted before an object starts to move is given by the equation:<br/><br/>
        <i>Fₛₘₐₓ = μₛ N<br/><br/></i>
        where Fₛₘₐₓ is the maximum static frictional force, μₛ is the coefficient of static friction (a dimensionless constant that depends on the materials in contact), and N is the normal force (the perpendicular force exerted by a surface on an object resting on it).
        <br/><br/>
        Once an object is in motion, the kinetic frictional force can be calculated using:<br/><br/>
        <i>Fₖ = μₖ N<br/><br/></i>
        where Fₖ is the kinetic frictional force, μₖ is the coefficient of kinetic friction, and N is the normal force.
        "
        />
      </main>
    </>
  );
}
