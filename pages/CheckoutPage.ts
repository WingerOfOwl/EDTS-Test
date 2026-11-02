import { expect, Page } from "@playwright/test";


const baseURL = 'https://www.klikindomaret.com/';
// const popupSelector = '/html/body/div[1]/div/div/div[18]/div/div/div/button';
const foodSelector = '/html/body/div[1]/div/div/div[5]/div/div[1]/div/div[2]/div/div/div[2]/div/div[1]/div/a/div';
const selaiSelector = '/html/body/div[1]/div/div/div[4]/main/div/div[1]/div/ul/aside/ul/li/div[2]/ul/li[7]/div[1]/div[2]/span[2]';
const MaduSelector = '/html/body/div[1]/div/div/div[4]/main/div/div[1]/div/ul/aside/ul/li/div[2]/ul/li[7]/div[2]/ul/a[1]/li/span';
const PrductSelector = '/html/body/div[1]/div/div/div[4]/main/div[2]/div[2]/div[3]/div[1]/div[1]/div/div/div/div[1]/div/button[1]';
const usernameInputSelector = '/html/body/div[1]/div/div/div[6]/div/div/div/div/form/div[1]/div[1]/input';
const passwordInputSelector = '#password';
const selanjutnyaButtonSelector = '/html/body/div[1]/div/div/div[6]/div/div/div/div/form/div[1]/div[3]/button';
const DaftarButtonSelector = '/html/body/div[1]/div/div/div[6]/div/div/div/div/div[4]/button[2]';

// const assertionSelector = '//*[@id="header"]/div[2]/div[1]/span/img';
const assertionMakanan = '/html/body/div[1]/div/div/div[4]/main/div/div[1]/div/ul/aside/ul/div'
const assertionMadu = '/html/body/div[1]/div/div/div[4]/main/div[2]/div[2]/div[3]/div[1]/div[1]/div/div/a/div/h2'
const assertionProduct = '/html/body/div[1]/div/div/div[6]/div/div/div/div/div/div'
const assertionLogin = '/html/body/div[1]/div/div/div[6]/div/div/div/div/div[2]'

export class DataLandingPage {
    readonly page: Page;
    readonly baseURL: string;
    // readonly popupSelector: string;
    readonly foodSelector: string;
    readonly selaiSelector: string;
    readonly MaduSelector: string;
    readonly PrductSelector: string;
    readonly usernameInputSelector: string;
    readonly passwordInputSelector: string;
    readonly selanjutnyaButtonSelector: string;
    readonly DaftarButtonSelector: string;
    readonly loginButtonSelector: string;
    readonly errorMessageSelector: string;
    readonly assertionSelector: string;
    readonly assertionMakanan: string;
    readonly assertionMadu: string;
    readonly assertionProduct: string;
    readonly assertionLogin: string;

    constructor(page: Page) {
        this.page = page;

        this.baseURL = baseURL;
        // this.popupSelector = popupSelector;
        this.foodSelector = foodSelector;
        this.selaiSelector = selaiSelector;
        this.MaduSelector = MaduSelector;
        this.PrductSelector = PrductSelector;
        this.usernameInputSelector = usernameInputSelector;
        this.passwordInputSelector = passwordInputSelector;
        this.selanjutnyaButtonSelector = selanjutnyaButtonSelector;
        this.DaftarButtonSelector = DaftarButtonSelector;
        this.loginButtonSelector = '#login-button';
        this.errorMessageSelector = '[data-test="error"]';
        // this.assertionSelector = assertionSelector;
        this.assertionMakanan = assertionMakanan;
        this.assertionMadu = assertionMadu;
        this.assertionProduct = assertionProduct;
        this.assertionLogin = assertionLogin;
    }

    async navigateToLandingPage() {
        await this.page.goto(this.baseURL);
        await expect(this.page).toHaveURL(this.baseURL);
    
    }

    async AddToCart(NumberPhone: string) {
        await this.page.click(this.foodSelector);
        await expect(this.page.locator(this.assertionMakanan)).toBeVisible();
        await this.page.click(this.selaiSelector);
        await this.page.click(this.MaduSelector);
        await expect(this.page.locator(this.assertionMadu)).toBeVisible();
        await this.page.click(this.PrductSelector);
        await expect(this.page.locator(this.assertionProduct)).toBeVisible();
        await this.page.fill(this.usernameInputSelector, NumberPhone);
        await this.page.click(this.selanjutnyaButtonSelector);
        await expect(this.page.locator(this.assertionLogin)).toBeVisible();
        await this.page.click(this.DaftarButtonSelector);
    }

}