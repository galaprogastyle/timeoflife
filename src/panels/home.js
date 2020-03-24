import React from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import CardGrid from '@vkontakte/vkui/dist/components/CardGrid/CardGrid';
import '../fonts/montserrat.ttf'
import './style.css';

const home = props => (
    <Panel id={props.id}> 
        <PanelHeader>
            Time of Life
        </PanelHeader>
        <Group separator="hide">
      <CardGrid>
        <Card size="l">
          <div style={{ height: 96 }} className="font" > 14:11:34</div>
        </Card>
      </CardGrid>
    </Group>
            <Div>
                <Button onClick={() => props.UpdateTheme()} size="xl" mode="secondary">Theme</Button>
            </Div>
        <Div>
            <Button onClick={() => props.goToPage("second")} size="xl" mode="secondary">Перейти на вторую панель</Button>
        </Div>
    </Panel>
);

export default home;
