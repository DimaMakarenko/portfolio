import { ReactElement, useState } from 'react';
import styled from 'styled-components/macro';

interface TabListProps {
  tabs: string[];
}

const Tab = styled.button<{ isActive: boolean }>`
  text-decoration: none;
  text-decoration-skip-ink: auto;
  background-color: transparent;
  text-decoration: none;
  position: relative;
  transition: ${({ theme }) => theme.transition};
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.tabs.height}px;
  padding: 0px 20px 2px;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.green : theme.colors.slate)};
  text-align: left;
  text-transform: capitalize;
  border-left: 2px solid ${({ theme }) => theme.colors.lightestNavy};
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightNavy};
    color: ${({ theme }) => theme.colors.green};
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
  background-color: ${({ theme }) => theme.colors.green};
  transition: ${({ theme }) => theme.transition};
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

export function TabList({ tabs }: TabListProps): ReactElement {
  const [activeTabId, setActiveTabId] = useState<number>(0);

  return (
    <Tabs>
      {tabs.map((item, index) => (
        <Tab key={index} isActive={activeTabId === index} onClick={() => setActiveTabId(index)}>
          <span>{item}</span>
        </Tab>
      ))}
      <Highlight activeTabId={activeTabId} />
    </Tabs>
  );
}
