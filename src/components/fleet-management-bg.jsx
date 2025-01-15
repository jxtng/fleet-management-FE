import * as React from "react";
import "@/styles/fleet-management-bg.css";
import { cn } from "@/lib/utils";

const FleetManagementBg = ({ className, props }) => (
  <svg
    preserveAspectRatio="xMidYMid slice"
    viewBox="0 0 806 806"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("bg-[#11894E]/15", className)}
    {...props}
  >
    {/* <g id="Frame 1" clipPath="url(#clip0_23_50)"> */}
    <rect width={806} height={806} fill="none" />
    <g id="polygonGroup">
      <path
        id="polygon3"
        d="M279.402 289.092L398.999 239.553L518.596 289.092L568.135 408.689L518.596 528.286L398.999 577.825L279.402 528.286L229.864 408.689L279.402 289.092Z"
        stroke="#11894E"
        strokeWidth={1.02222}
      />
      <path
        id="polygon2"
        d="M207.596 214.218L403.089 133.242L598.582 214.218L679.558 409.711L598.582 605.204L403.089 686.18L207.596 605.204L126.62 409.711L207.596 214.218Z"
        stroke="#11894E"
        strokeWidth={1.02222}
      />
      <path
        id="polygon1"
        d="M118.689 118.155L403.089 0.353025L687.489 118.155L805.291 402.555L687.489 686.955L403.089 804.758L118.689 686.955L0.886228 402.555L118.689 118.155Z"
        stroke="#11894E"
        strokeWidth={1.02222}
      />
    </g>
    <g id="lineGroup">
      <path
        id="line4"
        d="M0 409L806 403"
        stroke="#12884E"
        strokeWidth={1.02222}
        strokeLinecap="square"
      />
      <path
        id="line3"
        d="M0 0L806 806"
        stroke="#12884E"
        strokeWidth={1.02222}
        strokeLinecap="square"
      />
      <path
        id="line2"
        d="M806 0L0 806"
        stroke="#12884E"
        strokeWidth={1.02222}
        strokeLinecap="square"
      />
      <path
        id="line1"
        d="M403 0L403 806"
        stroke="#12884E"
        strokeWidth={1.02222}
        strokeLinecap="square"
      />
    </g>
    <g id="workOrdersGroup">
      <g id="workOrdersButton">
        <rect
          x={229.823}
          y={177.156}
          width={129.822}
          height={46}
          rx={7.66667}
          fill="#FEFFFF"
        />
        <rect
          x={229.823}
          y={177.156}
          width={129.822}
          height={46}
          rx={7.66667}
          stroke="#D5D5D5"
          strokeWidth={1.02222}
        />
        <text
          id="Work Orders"
          transform="translate(255.234 189.156)"
          fill="#252524"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Roboto"
          fontSize={14.3111}
          letterSpacing="0em"
        >
          <tspan x={0} y={15.6248}>
            {"Work Orders"}
          </tspan>
        </text>
      </g>
      <g id="workOrdersIcon" filter="url(#filter0_d_23_50)">
        <rect
          x={271.223}
          y={140.356}
          width={46}
          height={46}
          rx={23}
          fill="white"
          shapeRendering="crispEdges"
        />
        <rect
          x={272.245}
          y={141.378}
          width={43.9556}
          height={43.9556}
          rx={21.9778}
          stroke="#11894E"
          strokeWidth={2.04444}
        />
        <g id="tabler-icon-list">
          <path
            id="Vector"
            d="M290.645 156.711H301.889M290.645 162.844H301.889M290.645 168.978H301.889M286.556 156.711V156.721M286.556 162.844V162.855M286.556 168.978V168.988"
            stroke="#11894E"
            strokeWidth={1.53333}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
    <g id="pmRemindersGroup">
      <g id="pmRemindersButton">
        <rect
          x={528.311}
          y={224.178}
          width={129.822}
          height={48.0444}
          rx={7.66667}
          fill="#FEFFFF"
        />
        <rect
          x={528.311}
          y={224.178}
          width={129.822}
          height={48.0444}
          rx={7.66667}
          stroke="#D5D5D5"
          strokeWidth={1.02222}
        />
        <text
          id="Work Orders_2"
          transform="translate(546.222 236.7)"
          fill="#252524"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Roboto"
          fontSize={14.3111}
          letterSpacing="0em"
        >
          <tspan x={0} y={16.1359}>
            {"PM Reminders"}
          </tspan>
        </text>
      </g>
      <g id="pmRemindersIcon" filter="url(#filter1_d_23_50)">
        <rect
          x={569.711}
          y={187.378}
          width={46}
          height={46}
          rx={23}
          fill="white"
          shapeRendering="crispEdges"
        />
        <rect
          x={570.733}
          y={188.4}
          width={43.9556}
          height={43.9556}
          rx={21.9778}
          stroke="#11894E"
          strokeWidth={2.04444}
        />
        <g id="tabler-icon-calendar">
          <path
            id="Vector_2"
            d="M596.289 200.667V204.755M588.111 200.667V204.755M584.022 208.844H600.378M591.178 212.933H592.2V216M584.022 204.755C584.022 204.213 584.238 203.693 584.621 203.31C585.004 202.926 585.524 202.711 586.067 202.711H598.333C598.876 202.711 599.396 202.926 599.779 203.31C600.162 203.693 600.378 204.213 600.378 204.755V217.022C600.378 217.564 600.162 218.084 599.779 218.468C599.396 218.851 598.876 219.067 598.333 219.067H586.067C585.524 219.067 585.004 218.851 584.621 218.468C584.238 218.084 584.022 217.564 584.022 217.022V204.755Z"
            stroke="#11894E"
            strokeWidth={1.53333}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
    <g id="reportingGroup">
      <g id="reportingButton">
        <rect
          x={459.823}
          y={533.911}
          width={105.289}
          height={39.8667}
          rx={7.66667}
          fill="#FEFFFF"
        />
        <rect
          x={459.823}
          y={533.911}
          width={105.289}
          height={39.8667}
          rx={7.66667}
          stroke="#D5D5D5"
          strokeWidth={1.02222}
        />
        <text
          id="Work Orders_3"
          transform="translate(483.467 543.344)"
          fill="#252524"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Roboto"
          fontSize={13.2889}
          letterSpacing="0em"
        >
          <tspan x={0} y={14.7643}>
            {"Reporting"}
          </tspan>
        </text>
      </g>
      <g id="reportingIcon" filter="url(#filter2_d_23_50)">
        <rect
          x={487.934}
          y={499.156}
          width={46}
          height={46}
          rx={23}
          fill="white"
          shapeRendering="crispEdges"
        />
        <rect
          x={488.956}
          y={500.178}
          width={43.9556}
          height={43.9556}
          rx={21.9778}
          stroke="#11894E"
          strokeWidth={2.04444}
        />
        <g id="tabler-icon-chart-bar">
          <path
            id="Vector_3"
            d="M507.356 528.8V522.667C507.356 522.396 507.248 522.136 507.057 521.944C506.865 521.752 506.605 521.644 506.334 521.644H502.245C501.974 521.644 501.714 521.752 501.522 521.944C501.33 522.136 501.223 522.396 501.223 522.667V528.8C501.223 529.071 501.33 529.331 501.522 529.523C501.714 529.714 501.974 529.822 502.245 529.822M507.356 528.8C507.356 529.071 507.248 529.331 507.057 529.523C506.865 529.714 506.605 529.822 506.334 529.822H502.245M507.356 528.8C507.356 529.071 507.464 529.331 507.655 529.523C507.847 529.714 508.107 529.822 508.378 529.822H512.467C512.738 529.822 512.998 529.714 513.19 529.523C513.382 529.331 513.489 529.071 513.489 528.8M507.356 528.8V518.578C507.356 518.307 507.464 518.047 507.655 517.855C507.847 517.663 508.107 517.556 508.378 517.556H512.467C512.738 517.556 512.998 517.663 513.19 517.855C513.382 518.047 513.489 518.307 513.489 518.578V528.8M502.245 529.822H516.556M513.489 528.8C513.489 529.071 513.597 529.331 513.789 529.523C513.98 529.714 514.24 529.822 514.512 529.822H518.6C518.872 529.822 519.132 529.714 519.323 529.523C519.515 529.331 519.623 529.071 519.623 528.8V514.489C519.623 514.218 519.515 513.958 519.323 513.766C519.132 513.574 518.872 513.467 518.6 513.467H514.512C514.24 513.467 513.98 513.574 513.789 513.766C513.597 513.958 513.489 514.218 513.489 514.489V528.8Z"
            stroke="#11894E"
            strokeWidth={1.53333}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
    <g id="inspectionsGroup">
      <g id="inspectionsButton">
        <rect
          x={229.823}
          y={647.378}
          width={113.467}
          height={39.8667}
          rx={7.66667}
          fill="#FEFFFF"
        />
        <rect
          x={229.823}
          y={647.378}
          width={113.467}
          height={39.8667}
          rx={7.66667}
          stroke="#D5D5D5"
          strokeWidth={1.02222}
        />
        <text
          id="Work Orders_4"
          transform="translate(249.556 658.811)"
          fill="#252524"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Roboto"
          fontSize={14.3111}
          letterSpacing="0em"
        >
          <tspan x={0} y={13.3915}>
            {"Inspections"}
          </tspan>
        </text>
      </g>
      <g id="inspectionsIcon" filter="url(#filter3_d_23_50)">
        <rect
          x={264.067}
          y={610.578}
          width={46}
          height={46}
          rx={23}
          fill="white"
          shapeRendering="crispEdges"
        />
        <rect
          x={265.09}
          y={611.6}
          width={43.9556}
          height={43.9556}
          rx={21.9778}
          stroke="#11894E"
          strokeWidth={2.04444}
        />
        <g id="tabler-icon-circle-check">
          <path
            id="Vector_4"
            d="M283.489 633.067L285.534 635.111L289.623 631.022M277.356 633.067C277.356 634.275 277.594 635.471 278.056 636.587C278.519 637.703 279.196 638.718 280.051 639.572C280.905 640.426 281.919 641.104 283.035 641.566C284.152 642.029 285.348 642.267 286.556 642.267C287.764 642.267 288.961 642.029 290.077 641.566C291.193 641.104 292.207 640.426 293.062 639.572C293.916 638.718 294.593 637.703 295.056 636.587C295.518 635.471 295.756 634.275 295.756 633.067C295.756 631.858 295.518 630.662 295.056 629.546C294.593 628.43 293.916 627.415 293.062 626.561C292.207 625.707 291.193 625.029 290.077 624.567C288.961 624.104 287.764 623.867 286.556 623.867C285.348 623.867 284.152 624.104 283.035 624.567C281.919 625.029 280.905 625.707 280.051 626.561C279.196 627.415 278.519 628.43 278.056 629.546C277.594 630.662 277.356 631.858 277.356 633.067Z"
            stroke="#11894E"
            strokeWidth={1.53333}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
    <g id="logoGroup" filter="url(#filter4_d_23_50)">
      <circle
        id="logoStroke"
        cx={403}
        cy={403}
        r={74.6222}
        fill="white"
        stroke="#11894E"
        strokeWidth={2.04444}
        strokeLinecap="round"
      />
      <circle id="logoBg" cx={403} cy={403} r={51.1111} fill="#11894E" />
      <g id="logo">
        <g id="Group 1">
          <path
            id="Vector_5"
            d="M421.242 395.043C420.496 395.041 419.773 395.305 419.203 395.788C418.633 396.272 418.251 396.943 418.127 397.683L412.725 383.641H380.074L374.63 397.683C374.527 397.088 374.257 396.535 373.853 396.089C373.448 395.644 372.925 395.323 372.346 395.166C371.767 395.009 371.155 395.022 370.582 395.203C370.01 395.384 369.501 395.725 369.115 396.188C368.729 396.65 368.482 397.213 368.403 397.812C368.325 398.411 368.418 399.019 368.671 399.567C368.925 400.114 369.329 400.577 369.835 400.901C370.341 401.225 370.929 401.397 371.529 401.397V417.529L379.014 412.065H378.853C377.957 412.066 377.083 411.779 376.36 411.246C375.637 410.713 375.102 409.962 374.833 409.101C374.563 408.241 374.574 407.317 374.863 406.463C375.152 405.609 375.704 404.87 376.439 404.354C377.174 403.838 378.054 403.572 378.95 403.594C379.846 403.616 380.712 403.925 381.421 404.477C382.131 405.028 382.646 405.793 382.894 406.66C383.141 407.527 383.107 408.451 382.796 409.297L382.873 409.241L405.498 417.932L421.256 408.753V401.397C422.093 401.397 422.896 401.062 423.488 400.466C424.08 399.871 424.413 399.062 424.413 398.22C424.413 397.377 424.08 396.569 423.488 395.973C422.896 395.377 422.093 395.043 421.256 395.043H421.242ZM398.09 398.22H377.436L381.996 386.465H410.802L415.32 398.22H412.83C412.83 398.177 412.83 398.135 412.83 398.093C412.83 397.119 412.639 396.155 412.269 395.256C411.899 394.356 411.356 393.539 410.672 392.851C409.988 392.163 409.176 391.616 408.282 391.244C407.389 390.871 406.431 390.68 405.463 390.68C404.496 390.68 403.538 390.871 402.644 391.244C401.751 391.616 400.939 392.163 400.254 392.851C399.57 393.539 399.028 394.356 398.658 395.256C398.287 396.155 398.097 397.119 398.097 398.093C398.104 398.135 398.111 398.177 398.111 398.22H398.09ZM400.545 398.22C400.545 398.177 400.545 398.135 400.545 398.093C400.545 396.782 401.063 395.525 401.984 394.598C402.905 393.671 404.154 393.151 405.456 393.151C406.759 393.151 408.008 393.671 408.929 394.598C409.85 395.525 410.367 396.782 410.367 398.093C410.367 398.135 410.367 398.177 410.367 398.22H400.545ZM413.917 412.107C413.085 412.107 412.271 411.859 411.579 411.393C410.886 410.928 410.347 410.266 410.028 409.492C409.71 408.718 409.626 407.866 409.789 407.045C409.951 406.223 410.352 405.468 410.941 404.876C411.529 404.283 412.279 403.88 413.096 403.716C413.913 403.553 414.759 403.637 415.528 403.957C416.297 404.278 416.955 404.821 417.417 405.518C417.88 406.214 418.127 407.033 418.127 407.871C418.127 408.994 417.683 410.072 416.894 410.866C416.104 411.661 415.034 412.107 413.917 412.107Z"
            fill="white"
          />
          <path
            id="Vector_6"
            d="M429.431 403.628L426.813 410.103L425.77 408.355L405.31 420.441L382.75 411.473L367.54 420.441L382.75 406.459L405.31 415.412L423.516 404.591L422.501 402.877L429.431 403.628Z"
            fill="white"
          />
        </g>
      </g>
    </g>
    <g id="issuesGroup">
      <g id="issuesButton">
        <rect
          x={182.8}
          y={420.444}
          width={105.289}
          height={35.7778}
          rx={7.66667}
          fill="#FEFFFF"
        />
        <rect
          x={182.8}
          y={420.444}
          width={105.289}
          height={35.7778}
          rx={7.66667}
          stroke="#D5D5D5"
          strokeWidth={1.02222}
        />
        <text
          id="Work Orders_5"
          transform="translate(214.444 427.333)"
          fill="#252524"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Roboto"
          fontSize={14.3111}
          letterSpacing="0em"
        >
          <tspan x={0} y={15.6248}>
            {"Issues"}
          </tspan>
        </text>
      </g>
      <g id="issuesIcon" filter="url(#filter5_d_23_50)">
        <rect
          x={211.933}
          y={378.533}
          width={46}
          height={46}
          rx={23}
          fill="white"
          shapeRendering="crispEdges"
        />
        <rect
          x={212.956}
          y={379.556}
          width={43.9556}
          height={43.9556}
          rx={21.9778}
          stroke="#11894E"
          strokeWidth={2.04444}
        />
        <g id="tabler-icon-exclamation-circle">
          <path
            id="Vector_7"
            d="M234.422 397.956V402.044M234.422 405.111V405.121M225.222 401.022C225.222 402.23 225.46 403.427 225.922 404.543C226.385 405.659 227.062 406.673 227.917 407.528C228.771 408.382 229.785 409.06 230.901 409.522C232.018 409.984 233.214 410.222 234.422 410.222C235.63 410.222 236.827 409.984 237.943 409.522C239.059 409.06 240.073 408.382 240.928 407.528C241.782 406.673 242.459 405.659 242.922 404.543C243.384 403.427 243.622 402.23 243.622 401.022C243.622 399.814 243.384 398.618 242.922 397.502C242.459 396.385 241.782 395.371 240.928 394.517C240.073 393.663 239.059 392.985 237.943 392.523C236.827 392.06 235.63 391.822 234.422 391.822C233.214 391.822 232.018 392.06 230.901 392.523C229.785 392.985 228.771 393.663 227.917 394.517C227.062 395.371 226.385 396.385 225.922 397.502C225.46 398.618 225.222 399.814 225.222 401.022Z"
            stroke="#11894E"
            strokeWidth={1.53333}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
    {/* </g> */}
    <defs>
      <filter
        id="filter0_d_23_50"
        x={265.089}
        y={138.311}
        width={58.2667}
        height={58.2667}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4.08889} />
        <feGaussianBlur stdDeviation={3.06667} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_23_50"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_23_50"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_23_50"
        x={563.578}
        y={185.333}
        width={58.2667}
        height={58.2667}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4.08889} />
        <feGaussianBlur stdDeviation={3.06667} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_23_50"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_23_50"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d_23_50"
        x={481.8}
        y={497.111}
        width={58.2667}
        height={58.2667}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4.08889} />
        <feGaussianBlur stdDeviation={3.06667} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_23_50"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_23_50"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_d_23_50"
        x={257.934}
        y={608.533}
        width={58.2667}
        height={58.2667}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4.08889} />
        <feGaussianBlur stdDeviation={3.06667} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_23_50"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_23_50"
          result="shape"
        />
      </filter>
      <filter
        id="filter4_d_23_50"
        x={298.822}
        y={302.378}
        width={200.356}
        height={200.356}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={12.2667} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_23_50"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_23_50"
          result="shape"
        />
      </filter>
      <filter
        id="filter5_d_23_50"
        x={205.8}
        y={376.489}
        width={58.2667}
        height={58.2667}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4.08889} />
        <feGaussianBlur stdDeviation={3.06667} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_23_50"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_23_50"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_23_50">
        <rect width={806} height={806} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default FleetManagementBg;
