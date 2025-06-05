describe('Pruebas Wikipedia App - Appium', () => {

  it('Caso 1: Buscar "Appium"', async () => {
    const searchContainer = await $('id=org.wikipedia:id/search_container');
    await searchContainer.click();

    const searchInput = await $('id=org.wikipedia:id/search_src_text');
    await searchInput.setValue('Appium');

    const firstResult = await $('id=org.wikipedia:id/page_list_item_title');
    const isDisplayed = await firstResult.isDisplayed();

    console.log('✔ Resultado visible:', isDisplayed);
    expect(isDisplayed).toBe(true);
  });

  it('Caso 2: Abrir el primer artículo', async () => {
    const firstResult = await $('id=org.wikipedia:id/page_list_item_title');
    await firstResult.click();

    const articleTitle = await $('id=org.wikipedia:id/view_page_title_text');
    const isVisible = await articleTitle.waitForDisplayed({ timeout: 5000 });

    console.log('✔ Título visible:', isVisible);
    expect(isVisible).toBe(true);
  });

  it('Caso 3: Volver atrás y verificar resultados', async () => {
    await driver.back();

    const searchResults = await $('id=org.wikipedia:id/search_results_list');
    const isVisible = await searchResults.waitForDisplayed({ timeout: 5000 });

    console.log('✔ Resultados visibles nuevamente:', isVisible);
    expect(isVisible).toBe(true);
  });

});