import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ContactListModule } from "src/app/application/contact-list";
import { MaterialModule } from "src/app/application/material.module";
import { LandingRoutingModule } from "../../landing-routing.module";
import { LandingComponent } from "./landing.component";


describe('LandingComponent', () => {
    let component: LandingComponent;
    let fixture: ComponentFixture<LandingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                LandingRoutingModule,
                HttpClientModule,
                ContactListModule,
                MaterialModule
            ],
            declarations: [LandingComponent],
            providers:[]
            
        })
        .compileComponents();
        
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LandingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    })
    
    it('testing html element', () => {
        const data = fixture.nativeElement;
        expect(data.querySelector(".heading").textContent).toContain("Phonebook")
    })



});