interface Props {
  className?: string;
  width?: number;
  height?: number;
}

export const Universe = ({ className, width = 140, height = 140 }: Props) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M116.443 8.04659C113.632 8.82789 114.523 4.30376 115.026 2.74046C115.327 0.511645 120.13 -1.65524 119.713 1.83565C119.103 3.0821 118.464 4.26425 117.819 5.4574L117.819 5.45746L117.819 5.45756L117.819 5.45801L117.819 5.45828L117.819 5.45842L117.819 5.45853C117.361 6.30662 116.899 7.1603 116.443 8.04659ZM62.8165 6.80564C62.5 4.1441 64.9821 -1.02174 67.3559 1.79317C68.072 4.37392 63.6065 13.3587 62.8165 6.80564ZM113.038 28.5885C108.377 32.5697 108.609 25.5428 111.175 23.2407C115.348 20.5121 115.472 26.2029 113.038 28.5885ZM44.3959 30.1815C44.4842 31.7821 43.2719 31.7902 42.2358 31.4534C39.6784 31.4674 34.1687 23.0666 38.2332 22.8988C38.3342 22.9461 38.4334 22.9961 38.5319 23.0457L38.5319 23.0458L38.532 23.0458L38.5321 23.0459L38.5322 23.0459L38.5323 23.046L38.5324 23.046L38.5325 23.0461L38.5326 23.0461L38.5327 23.0461L38.5328 23.0462L38.5329 23.0462L38.533 23.0463L38.533 23.0463L38.5331 23.0464L38.5332 23.0464L38.5333 23.0465L38.5334 23.0465C39.0875 23.3256 39.6188 23.5933 40.3121 23.3186C42.952 24.212 44.0105 27.8244 44.3959 30.1815ZM88.9936 68.4138L89.0198 68.414C88.8122 70.7218 89.1187 72.3319 91.3827 70.1657C93.0553 68.5506 92.8981 68.3998 91.5146 67.0722L91.5116 67.0694C89.2235 64.219 88.8159 65.5437 88.9936 68.4138ZM55.911 49.8548C56.3169 51.5517 58.262 49.7244 59.6695 48.4022C60.1611 47.9404 60.5871 47.5402 60.859 47.3733C60.6138 46.7048 60.0383 46.5014 59.4761 46.3027L59.476 46.3027L59.4759 46.3026L59.4759 46.3026L59.4758 46.3026L59.4758 46.3026L59.4757 46.3025L59.4757 46.3025L59.4756 46.3025L59.4755 46.3025L59.4755 46.3025L59.4754 46.3024L59.4754 46.3024L59.4753 46.3024L59.4753 46.3024L59.4752 46.3023L59.4751 46.3023L59.4751 46.3023L59.4749 46.3022C59.2776 46.2325 59.0819 46.1633 58.9027 46.0747C56.617 44.4863 56.4087 46.3417 56.2063 48.1435C56.1361 48.7692 56.0666 49.3885 55.911 49.8548ZM83.5985 83.9205C84.0314 80.3445 81.1656 82.7606 79.2869 84.3446L79.2868 84.3447L79.2867 84.3447C78.8295 84.7302 78.4307 85.0664 78.1522 85.2549C77.8251 86.2283 79.182 86.5146 80.4216 86.7761L80.4217 86.7761C81.0541 86.9096 81.6559 87.0365 81.9881 87.245C83.145 87.5638 83.2975 86.0688 83.4113 84.9521C83.458 84.4943 83.4982 84.1001 83.5985 83.9205ZM52.008 64.2137C52.8494 58.7469 50.2377 61.5073 48.0733 63.7948L48.0733 63.7949L48.0733 63.7949L48.0729 63.7952L48.0725 63.7957C47.5778 64.3186 47.1064 64.8168 46.705 65.1862C45.2236 66.5523 48.1021 68.5236 50.2043 69.9633C50.9367 70.4648 51.5748 70.9019 51.9016 71.2263C53.0657 71.2907 52.6336 68.7328 52.278 66.6276C52.1028 65.5908 51.9462 64.6637 52.008 64.2137ZM57.4518 82.2008C57.6121 82.567 57.7832 83.2936 57.9864 84.1571C58.5885 86.7146 59.4732 90.4728 61.198 89.6252C61.6545 89.2952 62.5431 88.9967 63.4971 88.6762C65.3324 88.0597 67.41 87.3618 67.1203 86.201C66.8336 86.0661 66.1636 85.6193 65.3022 85.0449L65.3021 85.0448C62.2983 83.0416 56.9679 79.4868 57.4518 82.2008ZM76.6583 51.3154L76.6584 51.3155C78.2205 52.1753 79.784 53.0358 81.2947 53.9722C81.6155 54.2966 82.1402 54.0525 82.2384 53.7392C82.1331 53.3273 82.0078 52.625 81.8544 51.7656L81.8543 51.7652L81.8541 51.7638L81.854 51.7634L81.854 51.7633C81.2069 48.1376 80.0615 41.7191 77.819 42.5067C76.8722 43.0372 75.8787 43.4767 74.8879 43.915C72.9975 44.7512 71.1173 45.5829 69.592 47.0335C71.8096 48.6468 74.2324 49.9803 76.6583 51.3154ZM92.0511 89.2483C98.1838 89.8685 103.762 87.1041 101.14 80.4709C101.952 78.7844 96.0703 70.0676 94.6416 71.9731C94.3408 72.2428 94.038 72.509 93.7366 72.774C90.8774 75.2875 88.1489 77.686 88.5286 81.9177C88.4558 83.1833 88.2029 84.2931 87.987 85.2408L87.9869 85.2409C87.372 87.9392 87.0566 89.3232 92.0511 89.2483ZM67.0584 29.3549C61.433 29.4192 59.4387 36.0317 58.023 40.726C57.9502 40.9673 57.879 41.2034 57.8089 41.4333C57.6419 42.9396 59.2925 43.3409 60.9016 43.7321C61.8207 43.9555 62.7263 44.1757 63.2718 44.5966C65.8794 44.9234 68.4382 43.2724 70.9935 41.6236C72.7459 40.4929 74.4967 39.3633 76.2605 38.8733C78.1905 37.4067 73.299 32.1845 71.9273 30.9098C70.6442 29.8734 69.2961 29.2529 67.0584 29.3549ZM71.3002 104.069C77.6266 104.185 79.8777 97.9871 81.641 93.1324L81.6649 93.0664C81.8984 92.4133 81.6279 92.0385 80.9052 91.7683C72.7849 88.2329 71.9624 88.6398 67.1595 91.016L67.1593 91.0161C65.8672 91.6554 64.287 92.4371 62.1992 93.323C61.0582 96.4418 67.9645 103.823 71.3002 104.069ZM34.1369 48.0972C33.724 51.4616 40.4356 63.2825 43.7529 63.1506C45.0326 61.7835 46.149 60.6905 47.121 59.7389C51.0716 55.8715 52.6367 54.3393 53.0757 46.2259C53.4359 44.4065 52.9491 44.1969 51.531 43.8077C51.1751 43.7476 50.7986 43.6816 50.4052 43.6127C44.6819 42.6092 35.3954 40.981 34.1369 48.0972ZM46.8444 92.7736C47.2703 92.5454 48.5221 92.4366 50.0109 92.3071C53.3229 92.0192 57.8072 91.6292 56.9757 89.5968C56.344 88.094 55.9902 86.4193 55.6358 84.7421C54.9822 81.6485 54.3267 78.5459 51.9222 76.4959C51.0255 76.1287 49.6509 74.8284 48.2206 73.4755C46.0896 71.4596 43.8351 69.3269 42.8539 69.9902C35.5714 78.3305 30.7518 92.592 46.8444 92.7736ZM106.261 46.2539C106.017 34.3651 91.2733 37.3446 83.9239 40.3125C83.3984 41.9465 84.378 44.5988 85.3223 47.1556C85.9418 48.8332 86.5462 50.4697 86.7003 51.7504C87.7347 58.9542 88.8173 59.8494 93.5301 63.7464L93.5307 63.7469C93.9585 64.1007 94.4162 64.4792 94.9065 64.8893C95.5058 65.3709 95.8176 65.3457 96.371 64.75C100.941 59.6484 105.736 53.1701 106.261 46.2539ZM55.4929 66.2504C54.4195 74.8286 58.8787 76.9856 64.6507 79.7775C66.0959 80.4765 67.6233 81.2154 69.1668 82.1048C72.8524 84.9418 76.1292 82.3232 79.3296 79.7656C80.6194 78.7348 81.8969 77.7139 83.1837 77.0641C84.6044 75.277 84.4268 72.7625 84.2529 70.3013C84.1609 68.9989 84.07 67.7115 84.2175 66.5548C84.0682 65.838 84.0137 65.0511 83.9586 64.254C83.8153 62.1831 83.6672 60.0436 81.8389 58.8884C81.0194 58.3439 80.2044 57.7951 79.3904 57.2468C75.4927 54.622 71.6164 52.0114 67.3663 49.9626C64.8993 48.9487 62.4875 51.1175 60.1962 53.178C58.9809 54.2709 57.7995 55.3332 56.6617 55.8741C54.6437 57.706 54.97 60.5495 55.279 63.2429C55.3993 64.291 55.517 65.3163 55.4929 66.2504ZM44.7618 40.1736C47.4161 40.3022 50.0304 40.637 52.6178 41.224C53.8096 41.4942 54.0173 41.3955 54.4094 40.1648C56.5696 33.7134 61.7559 21.695 70.2114 25.4775C74.8544 27.3494 78.2328 31.3384 80.7764 35.5442C81.3914 36.5808 81.6034 36.6254 82.8084 36.2408C90.8934 33.9676 104.896 30.8037 108.382 41.1168C111.243 50.9352 104.255 60.2475 98.5966 67.7222C98.0547 68.4382 98.5819 69.0658 99.0923 69.6735C99.3186 69.9428 99.5416 70.2082 99.6666 70.4757C100.468 71.5257 101.08 72.7006 101.689 73.8702C102.486 75.4013 103.278 76.9232 104.485 78.1436C108.001 85.1322 104.981 93.7015 96.1485 93.9155C94.8151 94.3486 92.8258 94.0401 90.9236 93.745C88.7329 93.4052 86.6576 93.0833 85.8327 93.933C83.8711 99.3356 80.5864 105.582 74.5665 107.075C67.8654 108.311 63.2434 102.324 60.3306 97.1641C59.6351 94.7239 58.3402 94.3194 56.0548 95.1729C50.1486 96.4182 43.4214 97.4065 38.0091 94.0218C29.1057 87.5837 35.2948 75.2039 40.1341 68.0624C41.1918 66.5116 39.7619 65.0561 38.3758 63.6452C37.6377 62.8939 36.912 62.1552 36.581 61.4215C28.7475 51.6097 29.7891 39.3562 44.7618 40.1736ZM41.7313 105.753C47.7532 107.517 39.3256 116.139 35.8359 116.527C31.3023 116.263 40.1138 106.523 41.7313 105.753ZM67.4351 122.535C61.9349 125.099 69.0816 141.161 70.7769 131.061C70.6414 130.438 70.592 129.548 70.538 128.574C70.3752 125.639 70.1703 121.944 67.4351 122.535ZM23.3701 41.8476C22.8164 41.6126 21.5399 41.5205 20.0529 41.4132C16.4513 41.1534 11.6148 40.8045 12.8219 38.1201C14.7463 33.8384 32.133 41.578 23.3701 41.8476ZM87.2047 136.289C87.7383 137.541 90.862 140.484 91.0259 137.582C90.7546 136.556 90.7195 135.336 90.684 134.1C90.601 131.212 90.5157 128.242 87.4071 127.488C84.5915 128.862 86.1874 133.952 87.2047 136.289ZM124.257 50.6575C126.739 51.2836 130.444 49.0741 129.966 46.3347C131.107 43.5493 128.178 44.2291 126.45 44.6706C123.946 44.9708 121.36 49.452 124.257 50.6575ZM124.44 86.0383C125.151 86.0403 125.357 86.4135 125.558 86.7749C125.694 87.0206 125.827 87.2609 126.113 87.3755C127.28 86.6162 130.887 89.1147 129.282 90.0412C123.513 93.6802 113.24 82.2509 124.44 86.0383ZM8.92612 64.5046C7.18109 65.1434 8.08603 68.1925 9.91334 67.8248C10.1017 67.7979 10.2953 67.7709 10.4933 67.7433C13.4976 67.325 17.4888 66.7692 18.7645 64.2177C17.2335 62.6474 12.5108 63.705 9.79783 64.3126L9.7966 64.3129C9.47536 64.3848 9.18232 64.4504 8.92612 64.5046ZM5.08847 55.1721C1.36094 55.6604 -2.9082 52.4941 2.71986 50.9138C6.58102 49.7631 13.1432 55.647 5.08847 55.1721ZM102.305 105.978C101.668 104.534 98.1315 105.191 98.4817 107.105C99.1858 109.669 101.443 113.493 104.325 113.555C104.641 111.992 103.928 110.259 103.233 108.572C102.868 107.684 102.507 106.809 102.305 105.978ZM48.575 132.746C46.2543 130.626 43.0339 136.954 43.5189 139.173C43.6072 139.379 43.6402 139.749 43.6756 140.148C43.7587 141.083 43.8556 142.173 44.7124 141.661C45.1366 140.871 45.676 140.101 46.219 139.325L46.2191 139.325C47.6273 137.314 49.0604 135.268 48.575 132.746ZM119.447 128.728C119.037 132.015 113.417 126.188 113.117 124.616C112.79 123.74 112.901 123.22 113.701 122.777C116.993 121.181 119 126.257 119.447 128.728ZM27.7444 99.6812C26.7098 96.7589 22.7507 99.9724 22.8602 101.969C22.6932 105.103 25.8865 104.949 27.6921 103.28C28.8029 102.605 28.426 101.591 28.0371 100.545C27.9302 100.257 27.8224 99.9672 27.7444 99.6812ZM42.0855 3.89433C43.7467 11.8976 42.7119 11.7268 38.7507 4.82452C36.5322 0.886836 41.7604 -0.747447 42.0855 3.89433ZM98.6397 25.8714C101.393 25.3413 101.941 24.0715 101.457 21.8568C102.408 17.8927 97.2626 18.7194 97.3428 21.8462C97.4895 22.2423 97.4837 22.8232 97.4778 23.4212C97.4659 24.6107 97.4533 25.8676 98.6397 25.8714ZM135.814 67.3948C129.903 67.3191 132.77 60.9678 140.119 65.2507C142.452 66.8354 139.648 67.0767 137.539 67.2582C136.797 67.3221 136.14 67.3786 135.824 67.4836C135.821 67.4542 135.818 67.4246 135.814 67.3948ZM56.9341 109.455C57.017 108.964 57.0918 108.521 57.2008 108.241C57.3973 106.466 55.8595 105.951 54.6015 106.547C53.0044 107.809 53.0603 111.812 55.3498 112.249C56.4429 112.366 56.7166 110.744 56.9341 109.455ZM24.0475 83.2743C21.9471 82.3337 23.5689 80.2299 24.8374 79.3062C25.8022 78.279 29.5511 78.9183 28.3862 80.7286C27.5402 81.421 26.6 81.909 25.6329 82.411C25.1087 82.6831 24.5767 82.9593 24.0475 83.2743ZM75.1216 21.9299C75.3428 26.1734 71.3158 21.4374 72.4734 19.4322C73.5416 16.7445 75.7645 20.1808 75.1216 21.9299ZM9.66175 93.8391C9.41905 93.8107 9.17989 93.8282 8.95505 93.8447C8.57515 93.8726 8.23611 93.8974 7.98981 93.6927C8.42701 93.4506 9.07488 93.3505 9.66175 93.8391ZM67.5942 70.7828C70.4154 70.102 73.0272 68.1737 73.0063 64.64C72.5771 58.4309 64.8691 55.9618 62.9412 63.09C62.2498 66.1182 63.9349 71.3648 67.5942 70.7828Z"
        fill="currentColor"
      />
    </svg>
  );
};