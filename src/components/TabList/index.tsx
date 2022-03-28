import { ReactElement, useState } from 'react';
import styled from 'styled-components/macro';

interface TabListProps {
  tabs: { title: string; value: string | ReactElement }[];
}

const Tab = styled.button<{ isActive: boolean }>`
  background-color: transparent;
  position: relative;
  transition: ${({ theme }) => theme.transition};
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.tabs.height}px;
  padding: 0px 20px 2px;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.main : theme.colors.text)};
  text-align: left;
  text-transform: capitalize;
  border-left: 2px solid ${({ theme }) => theme.colors.lightestNavy};
  font-weight: 500;
  white-space: nowrap;
  font-size: 15px;
  font-family: inherit;

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 0px 10px 2px;
    font-size: 14px;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.darkBg};
    color: ${({ theme }) => theme.colors.main};
  }
`;

const Highlight = styled.div<{ activeTabId: number }>`
  position: absolute;
  height: ${({ theme }) => theme.tabs.height}px;
  top: ${({ activeTabId, theme }) => activeTabId * theme.tabs.height}px;
  left: 0;
  z-index: 10;
  width: 2px;
  transition-delay: 0.1s;
  background-color: ${({ theme }) => theme.colors.main};
  transition: ${({ theme }) => theme.transition};
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: max-content;
`;

const TabListW = styled.div`
  display: flex;
`;

const TabValue = styled.div`
  margin-left: 30px;

  @media ${({ theme }) => theme.devices.laptop} {
    margin-left: 20px;
  }
  @media ${({ theme }) => theme.devices.tablet} {
    margin-left: 15px;
  }
`;

export function TabList({ tabs }: TabListProps): ReactElement {
  const [activeTabId, setActiveTabId] = useState<number>(0);

  return (
    <TabListW>
      <Tabs>
        {tabs.map((item, index) => (
          <Tab key={index} isActive={activeTabId === index} onClick={() => setActiveTabId(index)}>
            <span>{item.title}</span>
          </Tab>
        ))}
        <Highlight activeTabId={activeTabId} />
      </Tabs>
      <TabValue>{tabs[activeTabId].value}</TabValue>
    </TabListW>
  );
}
