import ContentLoader from "react-content-loader"

const Preloader = () => {
    return (
        <ContentLoader
            speed={2}
            width={270}
            height={230}
            viewBox="0 0 270 230"
            backgroundColor="#ededed"
            foregroundColor="#dedede"
        >
            <rect x="0" y="0" rx="4" ry="1" width="270" height="150" />
            <rect x="21" y="236" rx="3" ry="3" width="93" height="42" />
            <rect x="20" y="301" rx="3" ry="3" width="155" height="32" />
            <rect x="203" y="301" rx="3" ry="3" width="32" height="32" />
            <rect x="1" y="164" rx="3" ry="3" width="166" height="17" />
            <circle cx="259" cy="172" r="11" />
            <rect x="2" y="211" rx="3" ry="3" width="36" height="17" />
        </ContentLoader>
    )
}

export default Preloader;