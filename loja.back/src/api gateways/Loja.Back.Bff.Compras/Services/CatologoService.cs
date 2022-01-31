﻿using Loja.Back.Bff.Compras.Extensions;
using Microsoft.Extensions.Options;
using System;
using System.Net.Http;

namespace Loja.Back.Bff.Compras.Services
{
    public interface ICatologoService
    {

    }

    public class CatologoService : Service, ICatologoService
    {
        private readonly HttpClient _httpClient;

        public CatologoService(HttpClient httpClient, IOptions<AppServicesSettings> settings)
        {
            _httpClient = httpClient;
            _httpClient.BaseAddress = new Uri(settings.Value.CatologoUrl);
        }
    }
}
