import React, { useEffect, useState } from 'react'
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import { Container, createTheme, LinearProgress, Table, TableContainer, TableHead, TextField, ThemeProvider, Typography } from '@material-ui/core';

const CoinsTable = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    const { currency } = CryptoState();

    const fetchCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));

        setCoins(data);
        setLoading(false);
    };

    console.log(coins);

    useEffect(() => {
      fetchCoins();
    }, [currency]);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });
    
  return (
    <ThemeProvider theme={darkTheme}>
        <Container style={{ textAlign: "center" }}>
            <Typography 
            variant='h4'
            style={{ margin: 18, fontFamily: "Monserrat" }}
            >
                Cryptocurrency Prices by Market Cap
            </Typography>
            <TextField 
            label= "Search For a Crypto Currency.." 
            variant="outlined"
            style={{ marginBottom: 20, width: "100%" }}
            onChange={(e) => setSearch(e.target.value)}
            />

            <TableContainer>
                {loading ? (
                    <LinearProgress style={{ backgroundColor: "gold"}} />
                ) : (
                    <Table>
                        <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                            
                        </TableHead>
                    </Table>
                )
            }
            </TableContainer>
        </Container>
    </ThemeProvider>
  )
}

export default CoinsTable