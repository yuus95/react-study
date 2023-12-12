import React from "react";

export const TabType = {
    KEYWORD: 'KEYWORD',
    HISTORY: 'HISTORY',
}

/**
 * 출력용 레이블
 * @type {{[p: string]: string}}
 */
const TabLabel = {
    [TabType.KEYWORD]: "추천검색어",
    [TabType.HISTORY]: "최근검색어"
}


const Tabs = ({selectedTab, onChange}) => {
    return (
        <>
            <ul className="tabs">
                {Object.values(TabType).map((tabType) => {
                    return (
                        <li key={tabType}
                            className={selectedTab === tabType ? 'active' : ''}
                            onClick={() => onChange(tabType)}>
                            {TabLabel[tabType]}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
export default Tabs
