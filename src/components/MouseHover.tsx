import useMousePosition from "~/utils/useMousePosition";

const MouseHover = () => {
  const mousePosition = useMousePosition();
  return (
    <div
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
      className={`pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute `}
    />
  );
};

export default MouseHover;
