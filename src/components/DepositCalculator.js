import numeral from 'numeral';
import React, { Component } from 'react'
import { Card, InputGroup, FormControl, Button, Col, Table, Badge } from 'react-bootstrap';

export default class DepositCalculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
      days: 1,
      interest: 15.00,
      gross: 0,
      taxRate: 0,
      tax: 0,
      net: 0,
      total: 0,
      visible: false
    };
    this.calculate = this.calculate.bind(this);
  }
  calculate() {

    let gross = (this.state.amount * this.state.interest * this.state.days) / 36500;
    let taxRate = (this.state.days <= (30 * 6)) ? 5 : (this.state.days > 365) ? 0 : 3;
    let tax = (gross * taxRate) / 100;
    let net = gross - tax;
    let total = net + this.state.amount;
    this.setState({ gross: gross.toFixed(2), taxRate: taxRate, tax: tax.toFixed(2), net: net.toFixed(2), visible: true, total: total.toFixed(2) });

  }
  render() {
    return (
      <>
        <Card className="mb-2">
          <Card.Header>Vadeli Mevduat Faizi Hesapla</Card.Header>
          <Card.Body>
            <>
              <Col>
                <InputGroup className="mb-3">
                  <FormControl type="number" onChange={(e) => this.setState({ amount: (parseInt(e.target.value) > 0) ? parseInt(e.target.value) : 0, visible: false })} placeholder="Hesaplanacak Miktar" aria-label="Hesaplanacak Miktar" />
                  <InputGroup.Text >₺</InputGroup.Text>
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mb-3">
                  <FormControl type="number" onChange={(e) => this.setState({ interest: (parseFloat(e.target.value) < 101 && parseFloat(e.target.value) > 0) ? parseFloat(e.target.value) : 0, visible: false })} placeholder="Faiz Oranı" aria-label="Faiz Oranı" />
                  <InputGroup.Text >%</InputGroup.Text>
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mb-3">
                  <FormControl type="number" onChange={(e) => this.setState({ days: (parseInt(e.target.value) < 10000 && parseInt(e.target.value) > 0) ? parseInt(e.target.value) : 0, visible: false })} placeholder="Gün Sayısı" aria-label="Gün Sayısı" />
                  <InputGroup.Text >Gün</InputGroup.Text>
                </InputGroup>
              </Col>
              <Col className="d-grid gap-2">
                <Button variant="primary" onClick={this.calculate}>
                  Hesapla
                </Button>
              </Col>
            </>
          </Card.Body>
        </Card>
        {this.state.visible && (
          <Card>
            <Card.Header>Yaklaşık Sonuçlar</Card.Header>
            <Card.Body>
              <Table>
                <thead>
                  <tr className="table-primary">
                    <th colSpan="2">
                      <h5 className="text-center">Vadeli Mevduat Faizi</h5>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Miktar</th>
                    <td>{numeral(this.state.amount).format('0,0.00')}₺</td>
                  </tr>
                  <tr>
                    <th>Faiz Oranı</th>
                    <td>{this.state.interest}%</td>
                  </tr>
                  <tr>
                    <th>Gün Sayısı</th>
                    <td>{this.state.days}</td>
                  </tr>
                  <tr>
                    <th>Toplam Faiz</th>
                    <td>{numeral(this.state.gross).format('0,0.00')}₺</td>
                  </tr>
                  <tr>
                    <th>Gelir Vergisi</th>
                    <td>{numeral(this.state.tax).format('0,0.00')}₺</td>
                  </tr>
                  <tr>
                    <th>Net Faiz</th>
                    <td>{numeral(this.state.net).format('0,0.00')}₺</td>
                  </tr>
                  <tr>

                    <th>Toplam</th>
                    <td> <h3><Badge bg="success">{numeral(this.state.total).format('0,0.00')}₺</Badge></h3></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        )
        }
      </>
    )
  }
}