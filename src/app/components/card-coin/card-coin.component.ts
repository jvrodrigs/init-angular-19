import { Component, Input, OnInit } from '@angular/core';
import { ICurrencyData } from '../../coins/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-coin',
  imports: [CommonModule],
  templateUrl: './card-coin.component.html',
  styleUrl: './card-coin.component.css'
})
export class CardCoinComponent implements OnInit {
  @Input() data!: ICurrencyData;

  date_formated: string = '';
  hour_formated: string = '';

  ngOnInit(): void {
    this.formatarData();
  }

  get isPositivo(): boolean {
    return parseFloat(this.data!.varBid) > 0;
  }
  
  get isNegativo(): boolean {
    return parseFloat(this.data!.varBid) < 0;
  }
  
  get statusClass(): string {
    if (this.isPositivo) return 'bg-green-500';
    if (this.isNegativo) return 'bg-red-500';
    return 'bg-gray-200';
  }
  
  get badgeClass(): string {
    if (this.isPositivo) return 'bg-green-50 text-green-600';
    if (this.isNegativo) return 'bg-red-50 text-red-600';
    return 'bg-gray-50 text-gray-600';
  }
  
  get variacaoClass(): string {
    if (this.isPositivo) return 'text-green-600';
    if (this.isNegativo) return 'text-red-600';
    return 'text-gray-600';
  }
  
  formatarData(): void {
    const data = new Date(this.data!.create_date);
    
    this.date_formated = data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    });
    
    this.hour_formated = data.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
