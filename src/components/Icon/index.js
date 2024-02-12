import PropTypes from "prop-types";

const Icon = ({ name }) => {
  let icon;
  switch (name) {
    case "twitch":
      icon = (
        <path
          data-testid="icon"
          d="M23.7104 16.3932V10.4656M31.1199 3.05615H4.4458V26.7665H11.8553V32.6941L17.7829 26.7665H25.1923L31.1199 20.8389V3.05615ZM16.301 16.3932V10.4656V16.3932Z"
          stroke="#5B32FF"
          strokeWidth="1.54633"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;
    case "facebook":
      icon = (
        <path
          d="M27.3702 2.96387H22.9245C20.9594 2.96387 19.0748 3.74451 17.6852 5.13405C16.2957 6.5236 15.515 8.40823 15.515 10.3733V14.819H11.0693V20.7466H15.515V32.6018H21.4426V20.7466H25.8883L27.3702 14.819H21.4426V10.3733C21.4426 9.98032 21.5987 9.6034 21.8766 9.32549C22.1546 9.04758 22.5315 8.89145 22.9245 8.89145H27.3702V2.96387Z"
          stroke="#5B32FF"
          strokeWidth="1.54633"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;
    case "twitter":
      icon = (
        <path
          d="M34.6491 4.53834C33.23 5.53933 31.6588 6.30492 29.9959 6.80564C29.1034 5.77944 27.9173 5.0521 26.598 4.72198C25.2786 4.39187 23.8898 4.47491 22.6192 4.95987C21.3486 5.44483 20.2576 6.30832 19.4937 7.43354C18.7298 8.55877 18.33 9.89144 18.3482 11.2513V12.7332C15.744 12.8007 13.1635 12.2232 10.8365 11.0519C8.50953 9.88069 6.50834 8.15214 5.01115 6.02023C5.01115 6.02023 -0.916428 19.3573 12.4206 25.2849C9.36871 27.3565 5.73307 28.3953 2.04736 28.2487C15.3844 35.6582 31.6853 28.2487 31.6853 11.2069C31.6839 10.7941 31.6442 10.3823 31.5667 9.9769C33.0792 8.48536 34.1464 6.60219 34.6491 4.53834V4.53834Z"
          stroke="#5B32FF"
          strokeWidth="1.54633"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;
    case "youtube":
      icon = (
        <>
          <g clipPath="url(#clip0_2_176)">
            <path
              d="M33.5327 9.39983C33.3567 8.71182 32.9982 8.08145 32.4934 7.57237C31.9886 7.06329 31.3554 6.69354 30.6578 6.50047C28.109 5.8916 17.9135 5.8916 17.9135 5.8916C17.9135 5.8916 7.71807 5.8916 5.16921 6.55845C4.47161 6.75153 3.83844 7.12128 3.33366 7.63036C2.82888 8.13944 2.47037 8.76981 2.29434 9.45782C1.82786 11.9883 1.59968 14.5553 1.61266 17.1266C1.59604 19.7173 1.82423 22.3039 2.29434 24.8534C2.4884 25.5201 2.85495 26.1265 3.35855 26.614C3.86215 27.1016 4.48579 27.4539 5.16921 27.6368C7.71807 28.3037 17.9135 28.3037 17.9135 28.3037C17.9135 28.3037 28.109 28.3037 30.6578 27.6368C31.3554 27.4437 31.9886 27.074 32.4934 26.5649C32.9982 26.0558 33.3567 25.4255 33.5327 24.7374C33.9956 22.226 34.2237 19.6785 34.2144 17.1266C34.231 14.536 34.0028 11.9494 33.5327 9.39983V9.39983Z"
              stroke="#5B32FF"
              strokeWidth="1.54633"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5793 21.8667L23.1002 17.1262L14.5793 12.3857V21.8667Z"
              stroke="#5B32FF"
              strokeWidth="1.54633"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_176">
              <rect
                width="35.5655"
                height="34.7923"
                fill="white"
                transform="translate(0.130859 0.0927734)"
              />
            </clipPath>
          </defs>
        </>
      );
      break;
    case "close":
      icon = (
        <>
          <rect width="36" height="36" fill="white" />
          <path
            d="M18.8911 17.5175L25.0208 11.3975C25.204 11.2143 25.3069 10.9658 25.3069 10.7067C25.3069 10.4476 25.204 10.1991 25.0208 10.0159C24.8376 9.83267 24.5891 9.72974 24.33 9.72974C24.0709 9.72974 23.8224 9.83267 23.6392 10.0159L17.5192 16.1456L11.3992 10.0159C11.2159 9.83267 10.9675 9.72974 10.7084 9.72974C10.4492 9.72974 10.2008 9.83267 10.0175 10.0159C9.83433 10.1991 9.7314 10.4476 9.7314 10.7067C9.7314 10.9658 9.83433 11.2143 10.0175 11.3975L16.1473 17.5175L10.0175 23.6375C9.92634 23.728 9.85396 23.8356 9.80456 23.9541C9.75517 24.0727 9.72974 24.1999 9.72974 24.3283C9.72974 24.4568 9.75517 24.5839 9.80456 24.7025C9.85396 24.8211 9.92634 24.9287 10.0175 25.0191C10.108 25.1103 10.2156 25.1827 10.3342 25.2321C10.4527 25.2815 10.5799 25.3069 10.7084 25.3069C10.8368 25.3069 10.964 25.2815 11.0825 25.2321C11.2011 25.1827 11.3087 25.1103 11.3992 25.0191L17.5192 18.8894L23.6392 25.0191C23.7296 25.1103 23.8372 25.1827 23.9558 25.2321C24.0744 25.2815 24.2015 25.3069 24.33 25.3069C24.4584 25.3069 24.5856 25.2815 24.7042 25.2321C24.8227 25.1827 24.9303 25.1103 25.0208 25.0191C25.112 24.9287 25.1844 24.8211 25.2338 24.7025C25.2832 24.5839 25.3086 24.4568 25.3086 24.3283C25.3086 24.1999 25.2832 24.0727 25.2338 23.9541C25.1844 23.8356 25.112 23.728 25.0208 23.6375L18.8911 17.5175Z"
            fill="#5B32FF"
          />
        </>
      );
      break;
    default:
      icon = null
  }
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icon}
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon;
