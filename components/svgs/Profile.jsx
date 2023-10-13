export default function Profile({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width="40"
      height="40"
    >
      <path
        d="M16.043,14H7.957A4.963,4.963,0,0,0,3,18.957V24H21V18.957A4.963,4.963,0,0,0,16.043,14Z"
        fill={color}
      />
      <circle cx="12" cy="6" r="6" />
    </svg>
  );
}
