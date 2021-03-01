import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Container, TitleContainer, UpperLabel } from './styles';
import { LeadStoreCtx } from '../../stores/lead-store';
import LinearProgressIndicator from '../../components/LinearProgressIndicator/linear-progress-indicator';
import { InfoProfile } from '../../components/InfoProfile/info-profile';
import CustomPercentageInfo from '../../components/CustomPercentageInfo/custom-percentage-info';
import NegotiationText from '../../components/NegotiationText/negotiation-text';

const InfoPage = () => {

    const leadStore = useContext(LeadStoreCtx);
    const history = useHistory();

    useEffect(() => {
        if(leadStore.infoSelected.name === '') {
            history.push('/');
        }
    }, [leadStore.infoSelected.name, history])

    return (
        <Container isClient={leadStore.infoSelected.isClient}>
            <UpperLabel isClient={leadStore.infoSelected.isClient}>
                { leadStore.infoSelected.isClient ? 'Client' : 'Lead' }
            </UpperLabel>

            {
                leadStore.infoSelected.isClient 
                &&             
                <TitleContainer>
                    Nível de Satisfação do cliente
                </TitleContainer> 
            }

            {
                leadStore.infoSelected.isClient 
                &&             
                <LinearProgressIndicator />
            }



            <section>
                <div>
                    <InfoProfile 
                        name={ leadStore.infoSelected.name } 
                        address={ leadStore.infoSelected.address }
                    />
                </div>

                <div>
                    <TitleContainer>
                    { leadStore.infoSelected.isClient ? '% de Migração' : 'Negociação' } 
                    </TitleContainer> 
                    {
                        leadStore.infoSelected.isClient ?
                        <CustomPercentageInfo />
                        :
                        <NegotiationText />
                    }
                </div>
            </section>
        </Container>
    );
}
  
export default observer(InfoPage);