import { CommonModule } from '@angular/common';
import { HttpClient, httpResource } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { ICurrency, ICurrencyData } from './types';
import { ErrorComponent } from '../alerts/error/error.component';
import { CardCoinComponent } from '../components/card-coin/card-coin.component';

@Component({
  selector: 'app-coins',
  imports: [CommonModule, CardCoinComponent, ErrorComponent],
  templateUrl: './coins.component.html',
  styleUrl: './coins.component.css'
})
export class CoinsComponent {
  private readonly apiUrl = "https://economia.awesomeapi.com.br/json/last/";
  private http = inject(HttpClient);

  optionsCoinsAvailable: string[] = ['USD-BRL', 'EUR-BRL', 'BTC-BRL']
  
  current_coin = signal<string[]>(this.optionsCoinsAvailable);

  // fetch
  coinResource = httpResource<ICurrency>(
    () => `${this.apiUrl}${this.current_coin().join(',')}`,
    { defaultValue: {
      'ERR-COIN': {
        code: '',
        codein: '',
        name: '',
        high: '',
        low: '',
        varBid: '',
        pctChange: '',
        bid: '',
        ask: '',
        timestamp: '',
        create_date: '',
      } as ICurrencyData
    } as ICurrency }
  );
  
  handlerSelectCoinView(event: any) {
    if(event.target.value == null && event.target.value == "") return;
    this.current_coin.set([event.target.value]);
  }
}
