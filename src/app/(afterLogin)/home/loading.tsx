export default function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <svg height="100%" viewBox="0 0 32 32" width={40} className="loader">
        <circle
          cx="16"
          cy="16"
          fill="none"
          r="14"
          strokeWidth="4"
          style={{ stroke: "#0038f5", opacity: 0.2 }}
        ></circle>
        <circle
          cx="16"
          cy="16"
          fill="none"
          r="14"
          strokeWidth="4"
          style={{
            stroke: "#0038f5",
            strokeDasharray: 80,
            strokeDashoffset: 60,
          }}
        ></circle>
      </svg>
    </div>
  );
}