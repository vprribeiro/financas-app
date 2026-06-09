import React, { useState } from "react";
import {View, Text, TouchableWithoutFeedback} from 'react-native'
import { 
    Container, 
    ModalContent,
    ButtonFilter,
    ButtonFilterText,
} from './styles'

import {Calendar, LocaleConfig} from 'react-native-calendars'
import { ptBR } from './localeCalendar'

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

export default function CalendarModal({ setVisible, handleFilter }){

    const[dateNow, setDateNow] = useState(new Date())
    const [markedDates, setMarkedDates] = useState({})

    function handleOnDayPress(date){
        setDateNow(new Date(date.year, date.month - 1, date.day));
        let markedDay = {};

        markedDay[date.dateString] = {
            selected: true,
            textColor: '#FFF',
            selectedColor: '#3b3dbf'
        }
        setMarkedDates(markedDay)
    }

    function handleFilterDate(){
        handleFilter(dateNow);
        setVisible();

    }
    return(
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{flex:1}}></View>
            </TouchableWithoutFeedback>
                
            <ModalContent>

                <Calendar
                    onDayPress={handleOnDayPress}
                    markedDates={markedDates}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: '#FF0000',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#FFF'
                    }}
                />

                <ButtonFilter onPress={handleFilterDate}>
                    <ButtonFilterText>Filtrar</ButtonFilterText>
                </ButtonFilter>
            </ModalContent>
        </Container>
        
    )
}