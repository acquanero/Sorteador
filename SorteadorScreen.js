import React, { useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Header, Title, Content, CardItem, Card, Textarea, Form, Right, Body, Button, Text, ListItem, List} from 'native-base';


const SorteadorScreen = () => {

    const [participantes, setParticipantes] = useState([]);

    const [jugador, setJugador] = useState('');

    const addParticipant = () => {
        const newList = participantes.concat({ jugador });
        setParticipantes(newList);
        setJugador('');
    }

    const sortear = () => {
        if (participantes.length == 0) {
            Alert.alert(
                'Error',
                'No has ingresado ningun participante',
                [
                  { text: 'OK'}
                ],
                { cancelable: false }
              );
        } else {

            var elegido = Math.floor((Math.random() * participantes.length) + 1);
            var elElegido = participantes[elegido-1]
            Alert.alert(
                'Participante elegido:',
                `${elElegido.jugador}`,
                [
                  { text: 'OK'}
                ],
                { cancelable: false }
              );

        }
    }

    const resetar = () => {
        setParticipantes([])
    }

    return (
        <Container>
            <Header>
                <Body>
                    <Title>Sorteador</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <Card>
                    <CardItem header>
                        <Text>Ingrese los participantes</Text>
                    </CardItem>
                    <CardItem style={styles.micaja}>
                        <Form>
                            <Textarea
                                rowSpan={1}
                                bordered
                                style={styles.mitextarea}
                                value={jugador}
                                onChangeText={(text) => { setJugador(text) }}
                            />
                        </Form>
                        <Button
                            style={styles.miboton}
                            onPress={() => {
                                addParticipant();
                            }}
                        >
                            <Text>Agregar</Text>
                        </Button>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem style={styles.micaja}>
                        <Content>
                            <Text>Participantes:</Text>
                            <List>
                                {participantes.map((item) => (
                                    <ListItem key={item.id}>
                                        <Text>
                                            {item.jugador}
                                        </Text>
                                    </ListItem>
                                ))}
                            </List>
                        </Content>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem style={styles.mifooter}>
                        <Button
                            style={styles.botonSortear}
                            onPress={() => {
                                sortear();
                            }}
                        >
                            <Text>Sortear!</Text>
                        </Button>
                        <Button
                            style={styles.botonReset}
                            onPress={() => {
                                resetar();
                            }}
                        >
                            <Text>Resetear</Text>
                        </Button>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    micaja: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: 22,
    },
    miboton: {
        height: 46,
        marginLeft: 20,
    },
    botonSortear: {
        height: 46,
        marginLeft: 20,
        backgroundColor: 'green',
    },
    botonReset: {
        height: 46,
        marginLeft: 20,
        backgroundColor: 'rgb(220,10,10)',
    },
    mitextarea: {
        height: 35,
        width: 250,
    },
    mifooter: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

export default SorteadorScreen;