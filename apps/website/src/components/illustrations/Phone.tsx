interface Props {
  className?: string;
  width?: number;
  height?: number;
}

export const Phone = ({ className, width = 55, height = 63 }: Props) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 55 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.8906 1.92243C19.6198 1.65533 13.1529 3.99034 8.66462 8.47717C8.17835 9.30244 5.08425 11.5441 5.82139 12.2976C7.35168 13.5086 8.5973 15.0129 9.99118 16.3686C10.5124 16.9449 10.9481 17.0306 11.3823 16.3169C13.5536 13.7449 16.8175 10.8747 20.2896 10.876C22.9464 11.6439 25.2369 15.2871 27.6705 15.4012C29.1653 14.5142 25.4318 11.062 24.7739 10.1073C24.3052 9.60509 24.7972 8.42134 25.6468 9.06588C27.3798 10.0968 28.8897 11.4326 30.4492 12.6918C31.5849 13.4096 32.0995 12.0241 31.6344 11.1132C30.5892 9.15769 28.7189 7.71843 26.9585 6.41128C26.3883 6.03735 26.3235 5.6823 26.6569 5.1366C27.2453 4.32529 28.5026 5.42222 29.1836 5.73435C39.5332 13.1316 32.8511 0.935742 25.8906 1.92243ZM31.8882 9.2359C33.7957 13.3205 31.5679 15.3792 28.0015 12.1758C27.9877 13.0241 29.6443 15.7227 27.9728 16.0987C25.1089 16.7377 23.1788 13.5191 20.5996 12.6068C17.9657 11.7247 12.5981 16.3313 11.5609 18.7371C11.2155 20.0683 10.7087 19.3467 10.0548 20.0664C8.25533 22.0379 6.76604 24.3055 5.58177 26.6954C4.56954 29.0688 3.62586 31.4791 2.39235 33.7491C2.32072 33.9119 2.10672 34.0645 1.9475 34.0066C1.66021 33.7927 1.75922 33.4459 1.93521 33.1845C4.31648 28.1891 5.32792 22.4038 9.51315 18.4322C9.76252 17.7243 7.83497 16.6084 7.41189 15.9195C6.59487 15.333 5.4451 13.2972 4.52995 13.3456C3.27388 14.6745 2.61073 16.4182 1.70805 17.9768C0.437318 18.6325 0.958794 16.3708 1.30103 15.7855C1.8211 14.2656 3.0526 13.0935 3.5624 11.6095C8.72519 6.0722 12.9777 1.90101 21.1374 0.890713C24.3286 0.637217 27.6442 0.190702 30.6252 1.65612C34.3252 2.68415 39.189 10.7686 31.8882 9.2359Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.1011 53.2149C28.1011 53.2134 28.1011 53.2119 28.1011 53.2105C27.3099 53.382 23.5775 52.8123 23.5991 53.5316C23.7088 55.8565 23.6992 58.1647 24.397 60.4052C24.4592 60.7134 24.6053 60.7884 24.9453 60.8068C29.0997 61.1606 33.2323 61.5018 37.4155 61.4014C40.5543 61.3234 43.8234 61.9889 46.8378 60.9363C47.4245 60.7337 46.7698 60.1169 46.7971 59.7393C46.9036 57.5726 46.2136 55.5506 45.8438 53.4404C45.8607 52.3831 42.7714 53.0403 41.9358 52.8904C37.3317 53.2124 32.7164 53.2085 28.1011 53.2149ZM23.5555 52.7254C27.6326 51.0341 31.9803 51.7363 36.2843 51.7769C38.5462 51.6628 40.737 51.5898 42.9776 51.4471C43.6827 51.2594 45.4853 51.8544 45.5462 50.9381C45.1396 44.3482 43.7654 37.831 43.5808 31.2325C43.6511 29.9035 43.5524 29.1556 41.9254 29.0914C37.472 28.455 32.9627 29.0545 28.4823 28.7632C28.1356 28.7537 27.7726 28.8466 27.4491 28.6303C27.1469 28.6315 26.781 28.7707 26.4649 28.7779C25.6068 29.0482 22.4534 28.3558 22.7958 29.6228C23.2516 37.3182 23.011 45.024 23.5555 52.7254ZM48.6297 60.2537C51.6665 64.317 35.1378 62.5598 32.9735 62.9288C31.162 62.9095 29.3618 62.7442 27.5741 62.4718C26.4726 62.3182 25.3657 61.8098 24.2612 62.2407C23.2648 62.5876 23.1548 60.378 22.9334 59.7725C21.0373 49.981 21.2357 39.7921 21.469 29.8491C21.7591 26.6094 27.237 27.4361 29.688 27.1053C34.4836 26.9731 39.3065 26.8306 44.0391 27.6399C46.6325 27.9856 45.6019 31.2479 45.9323 32.9771C46.1081 35.2833 46.3881 37.5834 46.5963 39.8864C47.0752 45.277 47.555 50.6911 48.4663 56.0312C48.6651 57.467 48.9819 59.271 48.3385 60.4536C48.4974 60.4437 48.6191 60.434 48.6297 60.2537Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.4008 20.7495C48.7518 20.708 49.2157 21.2036 48.9484 21.4798C47.9536 22.165 45.9166 24.4445 44.7951 23.0769C44.492 21.6094 47.182 20.8784 48.4008 20.7495Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.405 39.9562C15.4701 40.0444 16.9355 39.6222 17.6648 40.5603C17.7471 40.6576 17.6511 40.8318 17.5179 40.8231C15.7605 40.916 13.9983 41.4412 12.2274 41.1827C10.2507 39.8726 13.4919 39.9025 14.405 39.9748C14.405 39.9686 14.405 39.9624 14.405 39.9562Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.033 33.3565C52.7734 34.8136 50.6255 34.5074 49.5473 35.179C48.7488 35.4992 48.4953 34.4624 49.0372 34.047C49.8962 33.3257 52.227 32.1813 53.033 33.3565Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.5448 41.7471C52.7492 41.4689 48.1608 41.6596 49.3618 40.277C50.2456 39.5202 56.7728 41.4089 53.5448 41.7471Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7906 33.6748C14.5585 34.1338 16.9362 34.867 17.7768 36.4453C16.5535 36.7431 13.825 34.7501 12.3025 34.4665C11.4195 34.1273 12.3136 33.8206 12.7906 33.6748Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.5431 24.1202C22.3904 23.9941 20.7026 22.5492 20.01 21.6422C19.8016 19.0345 23.2863 23.4432 23.5431 24.1202Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2823 27.449C16.4538 28.1396 14.7522 26.9454 13.8217 26.6641C12.9631 26.3644 12.8786 25.4601 13.9629 25.6205C15.2305 25.9531 16.4785 26.4573 17.2823 27.449Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.8387 22.7778C33.5824 23.345 33.7249 24.3448 33.084 24.6141C31.2827 23.9981 33.3281 20.6069 33.8387 22.7778Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52.6572 25.9325C55.906 26.3357 52.8642 27.1376 51.4625 27.0821C49.9858 26.3488 51.731 25.9097 52.6572 25.9325Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.213 30.2423C35.8916 30.3512 37.1811 29.9223 37.4701 30.6563C37.4327 31.1391 37.2722 31.3235 36.7923 31.3384C35.7975 31.3695 34.801 31.3748 33.8056 31.3606C33.1645 31.4228 32.179 30.8399 33.012 30.3576C33.7254 30.1656 34.4795 30.2652 35.213 30.2451C35.213 30.2442 35.213 30.2432 35.213 30.2423Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.9601 30.9038C30.9816 31.9183 29.7332 32.3053 29.5671 31.1803C29.4521 30.3849 30.7864 30.1911 30.9601 30.9038Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.9425 55.8854C33.2988 56.3272 35.0247 58.7516 36.2643 57.8856C37.4952 57.0609 35.862 56.0182 34.9425 55.8854ZM34.8018 54.5986C41.2703 54.7732 37.2721 61.9516 33.1893 58.2203C32.2442 57.2619 32.892 56.1162 33.1439 55.0678C33.4034 54.5785 34.2991 54.7331 34.8018 54.5986Z"
        fill="currentColor"
      />
    </svg>
  );
};