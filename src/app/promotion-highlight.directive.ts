import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

interface PromotionContext {
  discountPercentage: number;
  highlightClass: string;
  showHotDealBadge: boolean;
  showGoodDealBadge: boolean;
}

@Directive({
  selector: '[appPromotionHighlight]'
})
export class PromotionHighlightDirective implements OnInit {
  private hasView = false;

  @Input() set appPromotionHighlight(product: any) {
    if (product && product.isPromotional) {
      const discountPercentage = this.calculateDiscount(product.price, product.discountedPrice);
      const highlightClass = this.getHighlightClass(discountPercentage);
      const showHotDealBadge = discountPercentage >= 30;
      const showGoodDealBadge = discountPercentage >= 20 && discountPercentage < 30;

      if (!this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef, {
          discountPercentage,
          highlightClass,
          showHotDealBadge,
          showGoodDealBadge
        });
        this.hasView = true;
      } else {
        this.updateView(discountPercentage, highlightClass, showHotDealBadge, showGoodDealBadge);
      }
    } else if (this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  constructor(
    private templateRef: TemplateRef<PromotionContext>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    // Initialize view if needed
  }

  private calculateDiscount(originalPrice: number, discountedPrice: number): number {
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
  }

  private getHighlightClass(discountPercentage: number): string {
    if (discountPercentage >= 30) return 'hot-deal';
    if (discountPercentage >= 20) return 'good-deal';
    return 'regular-deal';
  }

  private updateView(discountPercentage: number, highlightClass: string, showHotDealBadge: boolean, showGoodDealBadge: boolean) {
    const view = this.viewContainer.get(0) as any;
    view.context.discountPercentage = discountPercentage;
    view.context.highlightClass = highlightClass;
    view.context.showHotDealBadge = showHotDealBadge;
    view.context.showGoodDealBadge = showGoodDealBadge;
  }
}